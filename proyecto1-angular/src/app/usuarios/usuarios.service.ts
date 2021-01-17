import { baseURL } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  data: Usuario[];

  constructor(private http: HttpClient) { }

  readOne(id:number){
    return this.http.get(`${baseURL}/usuarios/${id}`);
  }

  read(){
    return this.http.get(`${baseURL}/usuarios`);
  }

  readDisponibles(){
    return this.http.get(`${baseURL}/usuarios/disponibles`);
  }


  insert(data: Usuario){
    return this.http.post(`${baseURL}/usuarios`, data);
  }

  update(data: Usuario){
    return this.http.put(`${baseURL}/usuarios/` + data.id, data);
  }

  delete(id){
    return this.http.delete(`${baseURL}/usuarios/`+id);
  }

}
