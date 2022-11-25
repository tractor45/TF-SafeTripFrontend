import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import  {Presupuesto} from 'src/app/model/presupuesto';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-presupuesto-listar',
  templateUrl: './presupuesto-listar.component.html',
  styleUrls: ['./presupuesto-listar.component.css']
})
export class PresupuestoListarComponent implements OnInit {
  dataSource:MatTableDataSource<Presupuesto>=new MatTableDataSource();
  displayedColumns:string[] =['id','viajero','precio','destino']                 

  constructor(private pt:PresupuestoService) { }

  ngOnInit(): void {
    this.pt.listar().subscribe(d =>{
      this.dataSource= new MatTableDataSource(d);
    })
  }

}
