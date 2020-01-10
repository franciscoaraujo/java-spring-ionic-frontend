import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){//construtor contendo injeção de depenciar como argumento
    }

    findAll() :Observable <CategoriaDTO[]> {//reponsável por retornar a lista de categorias
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);//a craase permite fazer concatenacao com string no TS
    }
}

