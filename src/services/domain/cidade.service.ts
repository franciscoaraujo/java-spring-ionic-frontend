import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/cidade.dto";

@Injectable()
export class CidadeService{

    constructor(public http: HttpClient){//construtor contendo injeção de depenciar como argumento
    }

    findAll(estado_id: string) :Observable <CidadeDTO[]> {//reponsável por retornar a lista de categorias
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);//a craase permite fazer concatenacao com string no TS
    }
}

