import { GrupoDialogoComponent } from './../grupo-dialogo/grupo-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/service/grupo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Grupo } from 'src/app/model/grupo';

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.css']
})
export class GrupoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Grupo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombreGrupo', 'numIntegrantes', 'descripcion', 'lider','accion 1','accion 2'];
  private idMayor: number= 0;
  constructor(private gs: GrupoService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.gs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 

    })
    this.gs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.gs.getConfirmaEliminar().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor): false ;
    });
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(GrupoDialogoComponent);
  }
  eliminar (id: number){
    this.gs.eliminar(id).subscribe(() =>{
      this.gs.listar().subscribe(data =>{
        this.gs.setLista(data);
      });
    });
  }

}
