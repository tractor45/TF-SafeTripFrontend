import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto-buscar',
  templateUrl: './contacto-buscar.component.html',
  styleUrls: ['./contacto-buscar.component.css']
})
export class ContactoBuscarComponent implements OnInit {
  textoBuscar : string = ""
  
  constructor(private contactoService:ContactoService) { }

  ngOnInit(): void {
  }
  buscar(e:any) { 
    let array : Contacto[] = [];
    this.contactoService.listar().subscribe(data => {
      data.forEach((element,index) => {
        if (element.nameContacto.includes(e.target.value)){
          array.push(data[index]);
        }
      });
      this.contactoService.setLista(array);
    })
  }


}
