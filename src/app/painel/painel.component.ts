import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls:['']
})

export class PainelComponent implements OnInit{
    @Input() titulo: string = ''
    tituloPainel: string = ''

    ngOnInit() {
        this.tituloPainel = this.titulo
        this.titulo.length > 7 
        ? this.titulo = `${this.titulo.substr(0,7)} ... `
        : this.tituloPainel = this.titulo
  }
}