import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/sotrage_service';
import { AlertController } from 'ionic-angular';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertController: AlertController){

    }

    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        return next.handle(request)
                .catch((error, caught) => {
                    
                    let errorObj = error;
                    if(errorObj.error){
                        errorObj = errorObj.error;
                    }
                        
                    if(!errorObj.status){
                        errorObj = JSON.parse(errorObj);
                    }
                    console.log("Erro detectado pelo interceptor!!!");
                    switch(errorObj.status){
                        
                        case 401:

                            this.handler401();
                            break;

                        case 403:
                            this.handler403();
                            break;

                        default:
                            this.handlerDefaultError(errorObj);
                            break;
                    }
                    return Observable.throw(errorObj);
            }) as any;
    }
    
    handlerDefaultError(errorObj){
        let alert = this.alertController.create({
            title : "Erro " + errorObj.status + ": "+errorObj.error,
            message: errorObj.message,
            enableBackdropDismiss: false,
            buttons: [
                 {text: "OK"}
            ]
        }); 

        alert.present();
    }

    handler403(){
        this.storage.setLocaluser(null);
    }

    handler401(){
        let alert = this.alertController.create({
            title : "Erro 401: Falha de autenticação",
            message: "email ou senha incorretos",
            enableBackdropDismiss: false,
            buttons: [
                 {text: "OK"}
            ]
        }); 

        alert.present();
    }


}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi:true
}
