import { ViajeroService } from 'src/app/service/viajero.service';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-viajero-dialogo',
  templateUrl: './viajero-dialogo.component.html',
  styleUrls: ['./viajero-dialogo.component.css']
})
export class ViajeroDialogoComponent implements OnInit {

  constructor(private viajeroService:ViajeroService,private dialogRef : MatDialogRef<ViajeroDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado : boolean){
    this.viajeroService.setConfirmaEliminar(estado);
    this.dialogRef.close();
  }

}
