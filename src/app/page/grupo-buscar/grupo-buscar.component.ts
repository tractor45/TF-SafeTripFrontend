import { GrupoService } from 'src/app/service/grupo.service';
import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/model/grupo';

@Component({
  selector: 'app-grupo-buscar',
  templateUrl: './grupo-buscar.component.html',
  styleUrls: ['./grupo-buscar.component.css']
})
export class GrupoBuscarComponent implements OnInit {
  textoBuscar : string = ""
  constructor(private grupoService:GrupoService) { }

  ngOnInit(): void {
  }
  buscar(e:any) { 
    let array : Grupo[] = [];
    this.grupoService.listar().subscribe(data => {
      data.forEach((element,index) => {
        if (element.nombreGrupo.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.grupoService.setLista(array);
    })
  }
}
