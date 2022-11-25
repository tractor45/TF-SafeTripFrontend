import { ContactoService } from './../../service/contacto.service';
import { Contacto } from './../../model/contacto';
import { ViajeroService } from 'src/app/service/viajero.service';
import { Viajero } from './../../model/viajero';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-viajero-creaedita',
  templateUrl: './viajero-creaedita.component.html',
  styleUrls: ['./viajero-creaedita.component.css']
})
export class ViajeroCreaeditaComponent implements OnInit {

  viajero: Viajero = new Viajero();
  id: number = 0;
  edicion: boolean = false;
  listaContactos: Contacto[] = [];
  idContactoSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";
  constructor(private viajeroService: ViajeroService,
    private route: ActivatedRoute,
    private router: Router, private contactoService: ContactoService) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.contactoService.listar().subscribe(data => { this.listaContactos = data });
  }
  aceptar() {
    if (this.viajero.tipoViajero.length > 0 &&
      this.idContactoSeleccionado>0) {
      let c = new Contacto();
      c.idContacto = this.idContactoSeleccionado;
      this.viajero.contacto = c;
      if (this.edicion) {
        this.viajeroService.modificar(this.viajero).subscribe(() => {
          this.viajeroService.listar().subscribe(data => {
            this.viajeroService.setLista(data);
          });
        });

      } else {
        this.viajeroService.insertar(this.viajero).subscribe(() => {
          this.viajeroService.listar().subscribe(data => {
            this.viajeroService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['viajeros']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.viajeroService.listarId(this.id).subscribe(data => {
        this.viajero = data
        console.log(data);
        this.idContactoSeleccionado = data.contacto.idContacto;
      });

    }

  }
}
