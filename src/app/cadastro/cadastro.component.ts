import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent()
  http: Http  
  meuForm: FormGroup

  constructor(conexaoApi: Http, fb: FormBuilder) {
    this.http = conexaoApi
    
    this.meuForm = fb.group({
      titulo: ['',Validators.compose(
        [Validators.required, Validators.minLength(4)])],
      url: ['',Validators.required],
      descricao: ['']
    })
   }

  cadastrar(submit: Event){
    submit.preventDefault()

    let cabecalho = new Headers()
    cabecalho.append('COntent-Type','application/json')

    this.http
        .post('http://localhost:3000/v1/fotos',JSON.stringify(this.foto), {headers: cabecalho})
        .subscribe(
          () => {
            console.log('Cadastrou')
            this.foto = new FotoComponent()         
            }
            ,erro => console.log(erro)
        );    
  }

  ngOnInit() {
  }

}
