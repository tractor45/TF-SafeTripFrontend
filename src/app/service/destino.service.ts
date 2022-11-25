import { Destino } from './../model/destino';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  //private url:string=environment.host+"/destinos"
  private url: string = `${environment.host}/destinos`
  private listaCambio = new Subject<Destino[]>()
  private confirmaEliminar = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Destino[]>(this.url);
  }
  insertar(destino:Destino){
    return this.http.post(this.url,destino);
  }
  setLista(listaNueva:Destino[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(destino:Destino){
    return this.http.put(this.url +"/"+ destino.idDestino,destino);
  }
  listarId(id:number){
    return this.http.get<Destino>(`${this.url}/${id}`);
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
      return this.http.post<Destino[]>(`${this.url}/buscar`,texto.toLowerCase(),{
      });
    }
    return EMPTY;
  }
}
