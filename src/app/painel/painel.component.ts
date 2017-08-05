import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent implements OnInit{
    @Input() titulo: string = ''
    tituloPainel: string = ''

    ngOnInit() {
        this.tituloPainel = this.titulo        
        if(this.titulo.length > 7) 
            this.titulo = `${this.titulo.substr(0,7)} ... `        
  }
}