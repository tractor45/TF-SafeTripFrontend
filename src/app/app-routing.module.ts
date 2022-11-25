import { ContactoCantidadComponent } from './page/contacto-cantidad/contacto-cantidad.component';
import { ContactoNumdominioComponent } from './page/contacto-numdominio/contacto-numdominio.component';
import { ViajeroCreaeditaComponent } from './page/viajero-creaedita/viajero-creaedita.component';
import { ViajeroComponent } from './page/viajero/viajero.component';
import { GrupoCreaeditaComponent } from './page/grupo-creaedita/grupo-creaedita.component';
import { ContactoCreaeditaComponent } from './page/contacto-creaedita/contacto-creaedita.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ServicioCreaeditaComponent } from './page/servicio-creaedita/servicio-creaedita.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { DestinoCreaeditaComponent } from './page/destino-creaedita/destino-creaedita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinoComponent } from './page/destino/destino.component';
import { PresupuestoComponent } from './page/presupuesto/presupuesto.component';
import { GrupoComponent } from './page/grupo/grupo.component';

const routes: Routes = [{
  path: 'destinos', component: DestinoComponent,children:[
    {path:'nuevo', component: DestinoCreaeditaComponent},
    {
      path: 'edicion/:id',component:DestinoCreaeditaComponent}

  ]
} 
,{
  path:'presupuesto',component:PresupuestoComponent,children:[

  ]
},
{
  path :'servicio',component:ServicioComponent,children:[
    {path:'nuevo',component:ServicioCreaeditaComponent},
    {
      path:'edicion/:id',component:ServicioCreaeditaComponent
    }
  ]
},
{
  path :'grupo',component:GrupoComponent,children:[
    {path:'nuevo',component:GrupoCreaeditaComponent},
    {
      path:'edicion/:id',component:GrupoCreaeditaComponent
    }
  ]
},
{
  path :'contactos',component:ContactoComponent,children:[
    {path:'nuevo',component:ContactoCreaeditaComponent},
    {
      path:'edicion/:id',component:ContactoCreaeditaComponent
    },
    {
      path:'numdominio',component:ContactoNumdominioComponent
    },
    
  ]
},
{
  path :'viajeros',component:ViajeroComponent,children:[
    {path:'nuevo',component:ViajeroCreaeditaComponent},
    {
      path:'edicion/:id',component:ViajeroCreaeditaComponent
    },
    {
      path:'reportecantidadcontactos',component:ContactoCantidadComponent
    }
    
  ]
}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
