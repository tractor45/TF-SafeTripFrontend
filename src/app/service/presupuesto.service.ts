import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Presupuesto} from '../model/presupuesto';
@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  url:string="http://localhost:5000/presupuesto"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Presupuesto[]>(this.url);
  }
}
