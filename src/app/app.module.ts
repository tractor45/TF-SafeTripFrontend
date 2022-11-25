import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoComponent } from './page/destino/destino.component';
import { DestinoListarComponent } from './page/destino-listar/destino-listar.component';
import { PresupuestoComponent } from './page/presupuesto/presupuesto.component';
import { PresupuestoListarComponent } from './page/presupuesto-listar/presupuesto-listar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { ViajeroComponent } from './page/viajero/viajero.component';
import { ViajeroListarComponent } from './page/viajero-listar/viajero-listar.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { ServicioListarComponent } from './page/servicio-listar/servicio-listar.component';
import { DestinoCreaeditaComponent } from './page/destino-creaedita/destino-creaedita.component' 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { DestinoDialogoComponent } from './page/destino-dialogo/destino-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DestinoBuscarComponent } from './page/destino-buscar/destino-buscar.component';
import { ServicioBuscarComponent } from './page/servicio-buscar/servicio-buscar.component';
import { ServicioCreaeditaComponent } from './page/servicio-creaedita/servicio-creaedita.component';
import { ServicioDialogoComponent } from './page/servicio-dialogo/servicio-dialogo.component';
import { GrupoComponent } from './page/grupo/grupo.component';
import { GrupoListarComponent } from './page/grupo-listar/grupo-listar.component';
import { GrupoCreaeditaComponent } from './page/grupo-creaedita/grupo-creaedita.component';
import { GrupoDialogoComponent } from './page/grupo-dialogo/grupo-dialogo.component';
import { GrupoBuscarComponent } from './page/grupo-buscar/grupo-buscar.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ContactoCreaeditaComponent } from './page/contacto-creaedita/contacto-creaedita.component';
import { ContactoListarComponent } from './page/contacto-listar/contacto-listar.component';
import { ContactoBuscarComponent } from './page/contacto-buscar/contacto-buscar.component';
import { ContactoDialogoComponent } from './page/contacto-dialogo/contacto-dialogo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomDateAdapter } from './custom-adapter';
import { DateAdapter, MAT_DATE_LOCALE,MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ViajeroDialogoComponent } from './page/viajero-dialogo/viajero-dialogo.component';
import { ViajeroCreaeditaComponent } from './page/viajero-creaedita/viajero-creaedita.component';
import { ContactoNumdominioComponent } from './page/contacto-numdominio/contacto-numdominio.component';
import { ContactoCantidadComponent } from './page/contacto-cantidad/contacto-cantidad.component';




@NgModule({
  declarations: [
    AppComponent,
    DestinoComponent,
    DestinoListarComponent,
    PresupuestoComponent,
    PresupuestoListarComponent,
    ViajeroComponent,
    ViajeroListarComponent,
    ServicioComponent,
    ServicioListarComponent,
    DestinoCreaeditaComponent,
    DestinoDialogoComponent,
    DestinoBuscarComponent,
    ServicioBuscarComponent,
    ServicioCreaeditaComponent,
    ServicioDialogoComponent,
    GrupoComponent,
    GrupoListarComponent,
    GrupoCreaeditaComponent,
    GrupoDialogoComponent,
    GrupoBuscarComponent,
    NavbarComponent,
    ContactoComponent,
    ContactoCreaeditaComponent,
    ContactoListarComponent,
    ContactoBuscarComponent,
    ContactoDialogoComponent,
    ViajeroDialogoComponent,
    ViajeroCreaeditaComponent,
    ContactoNumdominioComponent,
    ContactoCantidadComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
    
    
  ],

  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
