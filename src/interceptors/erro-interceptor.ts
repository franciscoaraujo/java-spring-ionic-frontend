import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/sotrage_service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService){

    }

    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        return next.handle(request)
                .catch((error, caugth) => {
                    let errorObj = error;
                    
                    if(errorObj.error){
                        errorObj = errorObj.error;
                    }

                    if(!error.status){
                        errorObj = JSON.parse(errorObj);
                    }

                    console.log("Erro detectado pelo interceptor!!!");
                    console.log(errorObj);
                    
                    switch(errorObj.status){
                        case 403:
                            this.handle403();
                            break;
                    }


                    return Observable.throw(errorObj);
            }) as any;
    }
    

    handle403(){
        this.storage.setLocaluser(null);
    }



}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi:true
}
