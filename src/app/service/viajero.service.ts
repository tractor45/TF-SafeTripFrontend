import { Resultado } from './../model/resultado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viajero } from '../model/viajero';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  //private url:string=environment.host+"/destinos"
  private url: string = `${environment.host}/viajeros`
  private listaCambio = new Subject<Viajero[]>()
  private confirmaEliminar = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar() {
    return this.http.get<Viajero[]>(this.url);
  }
  
  insertar(viajero: Viajero) {

    return this.http.post(this.url, viajero);
  }
  
  modificar(viajero: Viajero) {

    return this.http.put(this.url, viajero);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Viajero[]>(`${this.url}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Viajero>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Viajero[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminar() {
    return this.confirmaEliminar.asObservable();
  }
  setConfirmaEliminar(estado: Boolean) {
    this.confirmaEliminar.next(estado);
  }
}
