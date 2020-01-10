import {  Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credencias.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./sotrage_service";



@Injectable()
export class  AuthService  {

    constructor(public http : HttpClient, public storage : StorageService ){

    }

    authenticate(creds : CredenciaisDTO){//metodo que executa o post concatenando o endereco e passando objetos como argumentos 
       return this.http
        .post(`${API_CONFIG.baseUrl}/login`, 
        creds,
        { 
            observe : 'response', 
            responseType : 'text'
        })
    }

    successfulLogin(authorizationValue : String){
        let tok = authorizationValue.substr(7);
        let user : LocalUser = {
            token : tok
        };
        this.storage.setLocaluser(user);
    }

    logout(){
        this.storage.setLocaluser(null);
    }
}