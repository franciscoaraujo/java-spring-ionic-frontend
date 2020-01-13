import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../config/api.config";
import { l } from "@angular/core/src/render3";
import { StorageService } from "../sotrage_service";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient, public storage: StorageService){
        
    }

    findByEmail(email: string) : Observable<ClienteDTO>{
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImgeFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`;
        return this.http.get(url,{responseType: 'blob'});
    }

}