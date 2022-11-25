import { Component, OnInit } from '@angular/core';
import { ContactoDialogoComponent } from '../contacto-dialogo/contacto-dialogo.component';
import { ContactoService } from 'src/app/service/contacto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Contacto } from 'src/app/model/contacto';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contacto-listar',
  templateUrl: './contacto-listar.component.html',
  styleUrls: ['./contacto-listar.component.css']
})
export class ContactoListarComponent implements OnInit {
  lista:Contacto[]=[];
  dataSource:MatTableDataSource<Contacto>= new MatTableDataSource();
  displayedColumns:string[]=['id','nombrecontacto','numerocel','acciones'];
  private idMayor:number=0;
  constructor(private contactoService:ContactoService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.contactoService.listar().subscribe(data => {
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);

    } )
    this.contactoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  });
  this.contactoService.getConfirmaEliminar().subscribe(data =>{
    data == true ? this.eliminar(this.idMayor): false ;
  });
}

confirmar(id: number){
  this.idMayor = id;
  this.dialog.open(ContactoDialogoComponent);
}
eliminar (id: number){
  this.contactoService.eliminar(id).subscribe(() =>{
    this.contactoService.listar().subscribe(data =>{
      this.contactoService.setLista(data);
    });
  });
}
filtrar(e: any) {
  this.dataSource.filter = e.target.value.trim();
}

}
