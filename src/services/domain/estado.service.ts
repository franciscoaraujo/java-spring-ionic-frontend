import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { EstadoDTO } from "../../models/estado.dto";

@Injectable()
export class EstadoService{

    constructor(public http: HttpClient){//construtor contendo injeção de depenciar como argumento
    }

    findAll() :Observable <EstadoDTO[]> {//reponsável por retornar a lista de categorias
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);//a craase permite fazer concatenacao com string no TS
    }
}

