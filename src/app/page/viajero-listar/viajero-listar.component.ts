import { ViajeroDialogoComponent } from './../viajero-dialogo/viajero-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import  {Viajero} from 'src/app/model/viajero';
import { ViajeroService } from 'src/app/service/viajero.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-viajero-listar',
  templateUrl: './viajero-listar.component.html',
  styleUrls: ['./viajero-listar.component.css']
})
export class ViajeroListarComponent implements OnInit {
  lista: Viajero[] = [];
  dataSource: MatTableDataSource<Viajero> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'email', 'tipoViajero', 'contacto','acciones'];
  private idMayor: number = 0;

  constructor(private viajeroService: ViajeroService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.viajeroService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.viajeroService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.viajeroService.getConfirmaEliminar().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ViajeroDialogoComponent);
  }
  eliminar(id: number) {
    this.viajeroService.eliminar(id).subscribe(() => {
      this.viajeroService.listar().subscribe(data => {
        this.viajeroService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
