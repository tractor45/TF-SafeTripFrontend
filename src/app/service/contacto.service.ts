import { Resultado } from 'src/app/model/resultado';
import { Contacto } from './../model/contacto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 //private url:string=environment.host+"/contactos"
  private url: string = `${environment.host}/contactos`
  private listaCambio = new Subject<Contacto[]>()
  private confirmaEliminar = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Contacto[]>(this.url);
  }
  insertar(contacto:Contacto){
    return this.http.post(this.url,contacto);
  }
  cantidadContactos(){
    return this.http.get<Resultado[]>(`${this.url}/cantidades`);
  }
  setLista(listaNueva:Contacto[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(contacto:Contacto){
    return this.http.put(this.url, contacto);
  }
  listarId(id:number){
    return this.http.get<Contacto>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  buscarnumCel(){
    return this.http.get<Contacto[]>(`${this.url}/buscarnumCel`)
  }
  getConfirmaEliminar() {
    return this.confirmaEliminar.asObservable();
  }
  setConfirmaEliminar(estado: Boolean) {
    this.confirmaEliminar.next(estado);
  }
  buscar(texto:string){
    console.log("algo")
    if(texto.length!=0){
      return this.http.post<Contacto[]>(`${this.url}/buscar`,texto.toLowerCase(),{
      });
    }
    return EMPTY;
  }
}
