import { ContactoService } from './../../service/contacto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';

@Component({
  selector: 'app-contacto-numdominio',
  templateUrl: './contacto-numdominio.component.html',
  styleUrls: ['./contacto-numdominio.component.css']
})
export class ContactoNumdominioComponent implements OnInit {
  dataSource: MatTableDataSource<Contacto> = new MatTableDataSource();
  displayedColumns:string[] = ['id','nombrecontacto','numeroCel'];

  constructor(private cs:ContactoService) { }

  ngOnInit(): void {
    this.cs.buscarnumCel().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
