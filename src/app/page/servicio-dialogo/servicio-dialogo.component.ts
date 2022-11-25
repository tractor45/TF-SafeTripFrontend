import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-servicio-dialogo',
  templateUrl: './servicio-dialogo.component.html',
  styleUrls: ['./servicio-dialogo.component.css']
})
export class ServicioDialogoComponent implements OnInit {

  constructor(private servicioService : ServicioService, private dialogRef : MatDialogRef<ServicioDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.servicioService.setConfirmaEliminar(estado);
    this.dialogRef.close();
  }

}
