import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../model/servicio';
import { Subject,EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  //private url:string=environment.host+"/servicio"
  private url: string = `${environment.host}/servicio`
  private listaCambio = new Subject<Servicio[]>()
  private confirmaEliminar = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Servicio[]>(this.url);
  }
  insertar(servicio:Servicio){
    return this.http.post(this.url,servicio);
  }
  setLista(listaNueva:Servicio[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(servicio:Servicio){
    return this.http.put(this.url +"/"+ servicio.id,servicio);
  }
  listarId(id:number){
    return this.http.get<Servicio>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminar() {
    return this.confirmaEliminar.asObservable();
  }
  setConfirmaEliminar(estado: Boolean) {
    this.confirmaEliminar.next(estado);
  }
  buscar(texto:string){
    if(texto.length!=0){
      return this.http.post<Servicio[]>(`${this.url}/buscar`,texto.toLowerCase(),{
      });
    }
    return EMPTY;
  }
}
