import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  data: Empleado[];

  constructor (private http: HttpClient) {}

  read(){
    return this.http.get(`${baseURL}/empleados`);
  }

  readOne(id){
    return this.http.get(`${baseURL}/empleados/${id}`);
  }

  insert(data) {
    console.log(data);
    return this.http.post(`${baseURL}/empleados`, data);
  }

  update(data){
    return this.http.put(`${baseURL}/empleados/${data.id}`, data);
  }

  delete(id){
    return this.http.delete(`${baseURL}/empleados/${id}`);
  }
}
