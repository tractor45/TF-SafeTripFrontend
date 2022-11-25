import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ContactoService } from 'src/app/service/contacto.service';
import { Contacto } from 'src/app/model/contacto';

@Component({
  selector: 'app-contacto-creaedita',
  templateUrl: './contacto-creaedita.component.html',
  styleUrls: ['./contacto-creaedita.component.css']
})
export class ContactoCreaeditaComponent implements OnInit {
  contacto : Contacto = new Contacto();
  mensaje : string = "";
  edicion :boolean = false ;
  id : number = 0;

  constructor(private contactoService:ContactoService,private router : Router,
    private route : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id = data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar()  {
    if (this.contacto.nameContacto.length > 0 && this.contacto.numCel.length > 0 ){
      if(this.edicion){
        this.contactoService.modificar(this.contacto).subscribe(data=> {
          this.contactoService.listar().subscribe(data => {
            this.contactoService.setLista(data);
          })
        })
      }
      this.contactoService.insertar(this.contacto).subscribe(data => {
      this.contactoService.listar().subscribe(data =>{
        this.contactoService.setLista(data);
      })
      })
      this.router.navigate(['contactos']);
    } else{
      this.mensaje = "Complete los valores requeridos";
    }
  }
   init(){
    if(this.edicion){
      this.contactoService.listarId(this.id).subscribe(data=>{
        this.contacto= data;
        console.log(data);
      })
    }
   }

}
