import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { Usuario } from '../usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  data: Empleado[];
  usuarios: Usuario;



  constructor (private http: HttpClient) {
      this.usuarios;
  }


  read(){
    return this.http.get(`${baseURL}/empleados`);
  }
  readUsuarios(){
    return this.http.get(`${baseURL}/usuarios`);
  }

  readSalas()
  {
    return this.http.get(`${baseURL}/salas`)
  }

  readOne(id){
    return this.http.get(`${baseURL}/empleados/${id}`);
  }

  insert(data: Empleado){
    return this.http.post(`${baseURL}/empleados`, data);
  }

  update(data: Empleado){
    return this.http.put(`${baseURL}/empleados/${data.id}`, data);
  }

  delete(id){
    return this.http.delete(`${baseURL}/empleados/${id}`);
  }
}
