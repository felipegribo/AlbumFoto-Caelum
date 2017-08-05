import { FotoService } from './../foto/foto.service';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent() 
  meuForm: FormGroup
  servico: FotoService
  roteamento: Router

  constructor(service: FotoService, fb: FormBuilder, rota: ActivatedRoute, router: Router) {
    
    this.servico = service
    this.roteamento = router

    rota.params.subscribe(    
      (parametros) => {
        if(parametros.id){
          this.servico.obterFoto(parametros.id)
                      .subscribe(
                         (fotoRetorna) => {
                            this.foto = fotoRetorna
                          }
                      )          
                  }  
             }
    )  
    
    this.meuForm = fb.group({
      titulo: ['',Validators.compose(
        [Validators.required, Validators.minLength(4)])],
      url: ['',Validators.required],
      descricao: ['']
    })
   }

  cadastrar(submit: Event){

    submit.preventDefault()

    if(this.foto._id){
      this.servico.editar(this.foto)
                  .subscribe(
                    () => {
                      this.roteamento.navigate([''])
                    }
                  )
    }
    else{
      this.servico.salvar(this.foto)
          .subscribe(
            () => {
              console.log('Cadastrou')
              this.foto = new FotoComponent()         
              }
              ,erro => console.log(erro)
          );    
    }

  }

  ngOnInit() {
  }

}
