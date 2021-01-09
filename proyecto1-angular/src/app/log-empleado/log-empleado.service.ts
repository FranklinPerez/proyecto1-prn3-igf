import { Injectable } from '@angular/core';
import { LogEmpleado } from './log-empleado';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogEmpleadoService {
  data: LogEmpleado[];
  //http: any;
  
  constructor(private http:HttpClient) { }

  read(){
    return this.http.get(`${baseURL}/log_empleados`);
  }
  insert(data: LogEmpleado){
    return this.http.post(`${baseURL}/log_empleados`, data);
  }
  update(data: LogEmpleado){
    return this.http.put(`${baseURL}/log_empleados/${data.id}`, data);
  }
  delete(id){
    return this.http.delete(`${baseURL}/log_empleados/${id}`);
  }
}
