import { FotoService } from './../foto/foto.service';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent() 
  meuForm: FormGroup
  servico: FotoService

  constructor(service: FotoService, fb: FormBuilder) {    
    this.servico = service
    this.meuForm = fb.group({
      titulo: ['',Validators.compose(
        [Validators.required, Validators.minLength(4)])],
      url: ['',Validators.required],
      descricao: ['']
    })
   }

  cadastrar(submit: Event){

    submit.preventDefault()
    this.servico.salvar(this.foto)
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
