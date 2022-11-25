import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/model/destino';
import { DestinoService } from 'src/app/service/destino.service';

@Component({
  selector: 'app-destino-buscar',
  templateUrl: './destino-buscar.component.html',
  styleUrls: ['./destino-buscar.component.css']
})
export class DestinoBuscarComponent implements OnInit {
  textoBuscar : string = ""
  
  constructor(private destinoService:DestinoService) { }

  ngOnInit(): void {
  }
  buscar(e:any) { 
    let array : Destino[] = [];
    this.destinoService.listar().subscribe(data => {
      data.forEach((element,index) => {
        if (element.nameDestino.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.destinoService.setLista(array);
    })
  }
}
