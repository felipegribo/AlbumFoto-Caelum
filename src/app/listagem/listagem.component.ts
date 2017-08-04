import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {
  
  title = 'Caelum Pic';
  fotos: object[] = []

  constructor(ajax: Http){

    ajax.get('http://localhost:3000/v1/fotos')
    .map(response => response.json())
    .subscribe(
      fotosEmJson => this.fotos = fotosEmJson,
      erro => console.log(erro)
      )
  }  

  ngOnInit() {
  }

}
