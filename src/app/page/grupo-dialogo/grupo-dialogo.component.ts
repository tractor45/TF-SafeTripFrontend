import { GrupoService } from './../../service/grupo.service';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-grupo-dialogo',
  templateUrl: './grupo-dialogo.component.html',
  styleUrls: ['./grupo-dialogo.component.css']
})
export class GrupoDialogoComponent implements OnInit {

  constructor(private grupoService:GrupoService,private dialogRef : MatDialogRef<GrupoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado : boolean){
    this.grupoService.setConfirmaEliminar(estado);
    this.dialogRef.close();
  }

}
