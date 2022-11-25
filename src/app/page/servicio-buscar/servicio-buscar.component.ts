import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-servicio-buscar',
  templateUrl: './servicio-buscar.component.html',
  styleUrls: ['./servicio-buscar.component.css']
})
export class ServicioBuscarComponent implements OnInit {

  textoBuscar : string = ""
  constructor(private servicioService:ServicioService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array :Servicio[] = [];
    this.servicioService.listar().subscribe(data =>{
      data.forEach((element, index) =>{
        if(element.tipoServicio.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.servicioService.setLista(array);
    })
  }

}
