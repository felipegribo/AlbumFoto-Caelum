import { FotoComponent } from './foto.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {
    http: Http
    url: string = 'http://localhost:3000/v1/fotos/'
    cabecalho = new Headers()

    constructor(conexaoApi: Http){
        this.http = conexaoApi
        this.cabecalho.append('Content-Type','application/json')
    }

    listar(): Observable<any>{        
        return this.http.get(this.url)
                    .map(response => response.json())
    }

    salvar(foto: FotoComponent): Observable<Response>{
        return this.http.post(
                this.url
                ,JSON.stringify(foto)
                ,{headers: this.cabecalho}
        )
    }

    editar(){

    }

    deletar(id: string): Observable<Response>{        
        return this.http.delete(this.url + id)
    }

}