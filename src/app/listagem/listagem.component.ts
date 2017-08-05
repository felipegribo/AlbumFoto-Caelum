import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})

export class ListagemComponent implements OnInit {
  
  title = 'Caelum Pic';
  fotos: FotoComponent[] = []
  servico: FotoService

  constructor(service: FotoService){

    this.servico = service
    this.servico.listar()
    .subscribe(
      fotosEmJson => this.fotos = fotosEmJson,
      erro => console.log(erro)
      )
  } 
    
  remover(fotoRemover: FotoComponent){

    this.servico.deletar(fotoRemover._id)
                .subscribe(
                  () => {
                    this.fotos = this.fotos.filter(
                      fotoLista => fotoLista._id != fotoRemover._id
                      )
                    }
                  )  
    console.log('Foto Removida!');     
  }

  ngOnInit() {
  }

}
