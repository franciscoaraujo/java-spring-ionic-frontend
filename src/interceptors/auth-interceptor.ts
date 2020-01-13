import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/sotrage_service';
import { API_CONFIG } from '../config/api.config';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService){

    }

    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        let localUser =  this.storage.getLocalUser();

        let n = API_CONFIG.baseUrl.length;
        let requestToAPI = request.url.substr(0,n) == API_CONFIG.baseUrl;

        if(localUser && requestToAPI){
            /*clonando a requisicao de uma original so acrescentando o header Authorization com o valor Bearer concatenado com o localUser Token*/
            const authReq = request.clone({headers: request.headers.set("Authorization", "Bearer " + localUser.token)});
            return next.handle(authReq)
        }else{
            return next.handle(request)
        }
    }
   
}
/**Declando o provider do interceptor */
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
}
