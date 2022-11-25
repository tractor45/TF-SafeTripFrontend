import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import { DestinoService } from 'src/app/service/destino.service';
import { Destino } from 'src/app/model/destino';

@Component({
  selector: 'app-destino-creaedita',
  templateUrl: './destino-creaedita.component.html',
  styleUrls: ['./destino-creaedita.component.css']
})
export class DestinoCreaeditaComponent implements OnInit {
  destino : Destino = new Destino();
  mensaje : string = "";
  edicion :boolean = false ;
  id : number = 0;

  constructor(private destinoService:DestinoService,private router : Router,
    private route : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id = data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.destino.despDestino.length > 0 && this.destino.nameDestino.length > 0 ){
      if(this.edicion){
        this.destinoService.modificar(this.destino).subscribe(data=> {
          this.destinoService.listar().subscribe(data => {
            this.destinoService.setLista(data);
          })
        })
      }
      this.destinoService.insertar(this.destino).subscribe(data => {
      this.destinoService.listar().subscribe(data =>{
        this.destinoService.setLista(data);
      })
      })
      this.router.navigate(['destinos']);
    } else{
      this.mensaje = "Complete los valores requeridos";
    }
  }
   init(){
    if(this.edicion){
      this.destinoService.listarId(this.id).subscribe(data=>{
        this.destino= data;
      })
    }
   }
}
