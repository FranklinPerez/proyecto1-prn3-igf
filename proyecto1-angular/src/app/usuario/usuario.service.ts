import { baseURL } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  data: Usuario[];

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get(`${baseURL}/usuarios`);
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
