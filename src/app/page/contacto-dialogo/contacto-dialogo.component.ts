import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/service/contacto.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-contacto-dialogo',
  templateUrl: './contacto-dialogo.component.html',
  styleUrls: ['./contacto-dialogo.component.css']
})
export class ContactoDialogoComponent implements OnInit {

  constructor(private contactoService:ContactoService,private dialogRef : MatDialogRef<ContactoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado : boolean){
    this.contactoService.setConfirmaEliminar(estado);
    this.dialogRef.close();
  }

}
