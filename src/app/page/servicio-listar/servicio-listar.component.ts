import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import  {Servicio} from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';
import { MatDialog } from '@angular/material/dialog';
import { ServicioDialogoComponent } from '../servicio-dialogo/servicio-dialogo.component';


@Component({
  selector: 'app-servicio-listar',
  templateUrl: './servicio-listar.component.html',
  styleUrls: ['./servicio-listar.component.css']
})
export class ServicioListarComponent implements OnInit {
  dataSource:MatTableDataSource<Servicio>=new MatTableDataSource();
  displayedColumns:string[] =['id','tipoServicio','oferta','descripcion','accion 1', 'accion 2']
  private idMayor: number = 0;
  constructor(private sv:ServicioService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.sv.listar().subscribe(d =>{
      this.dataSource= new MatTableDataSource(d);
    })
    this.sv.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.sv.getConfirmaEliminar().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor): false ;
    });
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(ServicioDialogoComponent);
  }
  eliminar (id: number){
    this.sv.eliminar(id).subscribe(() =>{
      this.sv.listar().subscribe(data =>{
        this.sv.setLista(data);
      });
    });
  }

}
