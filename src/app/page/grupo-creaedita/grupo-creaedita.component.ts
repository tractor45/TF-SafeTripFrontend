import { GrupoService } from './../../service/grupo.service';
import { Grupo } from './../../model/grupo';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-grupo-creaedita',
  templateUrl: './grupo-creaedita.component.html',
  styleUrls: ['./grupo-creaedita.component.css']
})
export class GrupoCreaeditaComponent implements OnInit {
  grupo : Grupo = new Grupo();
  mensaje : string = "";
  edicion :boolean = false ;
  id : number = 0;

  constructor(private grupoService:GrupoService,private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id = data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.grupo.nombreGrupo.length > 0 && this.grupo.descripcion.length > 0 ){
      if(this.edicion){
        this.grupoService.modificar(this.grupo).subscribe(data=> {
          this.grupoService.listar().subscribe(data => {
            this.grupoService.setLista(data);
          })
        })
      }
      this.grupoService.insertar(this.grupo).subscribe(data => {
      this.grupoService.listar().subscribe(data =>{
        this.grupoService.setLista(data);
      })
      })
      this.router.navigate(['grupo']);
    } else{
      this.mensaje = "Complete los valores requeridos";
    }
  }
   init(){
    if(this.edicion){
      this.grupoService.listarId(this.id).subscribe(data=>{
        this.grupo= data;
      })
    }
   }

}
