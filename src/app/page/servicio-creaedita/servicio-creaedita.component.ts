import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute,Params} from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio } from 'src/app/model/servicio';

@Component({
  selector: 'app-servicio-creaedita',
  templateUrl: './servicio-creaedita.component.html',
  styleUrls: ['./servicio-creaedita.component.css']
})
export class ServicioCreaeditaComponent implements OnInit {
  servicio : Servicio = new Servicio();
  mensaje : string = "";
  edicion : boolean = false;
  id :number = 0;

  constructor(private servicioService:ServicioService, private router : Router,private route : ActivatedRoute) { }

 
  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id = data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.servicio.descripcion.length > 0 && this.servicio.tipoServicio.length > 0 ){
      if(this.edicion){
        this.servicioService.modificar(this.servicio).subscribe(data=> {
          this.servicioService.listar().subscribe(data => {
            this.servicioService.setLista(data);
          })
        })
      }
      this.servicioService.insertar(this.servicio).subscribe(data => {
      this.servicioService.listar().subscribe(data =>{
        this.servicioService.setLista(data);
      })
      })
      this.router.navigate(['servicio']);
    } else{
      this.mensaje = "Complete los valores requeridos";
    }
  }
   init(){
    if(this.edicion){
      this.servicioService.listarId(this.id).subscribe(data=>{
        this.servicio= data;
      })
    }
   }





}
