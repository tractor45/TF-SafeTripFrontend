import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
import { Grupo } from './../model/grupo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  //private url:string=environment.host+"/grupos"
  private url: string = `${environment.host}/grupos`
  private listaCambio = new Subject<Grupo[]>()  
  private confirmaEliminar = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Grupo[]>(this.url);
  }
  insertar(grupo:Grupo){
    return this.http.post(this.url,grupo);
  }
  setLista(listaNueva:Grupo[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(grupo:Grupo){
    return this.http.put(this.url +"/"+ grupo.id,grupo);
  }
  listarId(id:number){
    return this.http.get<Grupo>(`${this.url}/${id}`);
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
      return this.http.post<Grupo[]>(`${this.url}/buscar`,texto.toLowerCase(),{
      });
    }
    return EMPTY;
  }
}
