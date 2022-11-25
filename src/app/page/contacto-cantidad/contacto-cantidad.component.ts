import { ContactoService } from 'src/app/service/contacto.service';
import { ViajeroService } from 'src/app/service/viajero.service';
import { Resultado } from 'src/app/model/resultado';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-cantidad',
  templateUrl: './contacto-cantidad.component.html',
  styleUrls: ['./contacto-cantidad.component.css']
})
export class ContactoCantidadComponent implements OnInit {
  dataSource: MatTableDataSource<Resultado> = new MatTableDataSource();
  displayedColumns: string[] = ['viajero', 'cantidad'];

  constructor(private vJ:ContactoService) { }

  ngOnInit(): void {
    this.vJ.cantidadContactos().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
