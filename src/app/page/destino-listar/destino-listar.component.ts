import { DestinoDialogoComponent } from './../destino-dialogo/destino-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { DestinoService } from 'src/app/service/destino.service';
import { MatTableDataSource } from '@angular/material/table';
import { Destino } from 'src/app/model/destino';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-destino-listar',
  templateUrl: './destino-listar.component.html',
  styleUrls: ['./destino-listar.component.css']
})
export class DestinoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Destino> = new MatTableDataSource();       
  displayedColumns:string[]=['id','destino','descripcion','fecha','acciones'];   
  private idMayor: number= 0;
  constructor(private ds: DestinoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ds.listar().subscribe(data => {
      this.dataSource= new MatTableDataSource(data);

    } )
    this.ds.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  });
  this.ds.getConfirmaEliminar().subscribe(data =>{
    data == true ? this.eliminar(this.idMayor): false ;
  });
}

confirmar(id: number){
  this.idMayor = id;
  this.dialog.open(DestinoDialogoComponent);
}
eliminar (id: number){
  this.ds.eliminar(id).subscribe(() =>{
    this.ds.listar().subscribe(data =>{
      this.ds.setLista(data);
    });
  });
}

}
