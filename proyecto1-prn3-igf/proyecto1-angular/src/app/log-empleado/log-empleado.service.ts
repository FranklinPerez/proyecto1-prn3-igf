import { Injectable } from '@angular/core';
import { LogEmpleado } from './log-empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogEmpleadoService {
  data: LogEmpleado[];
  //http: any;
  
  constructor(private http:HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/log_empleados');
  }
  insert(data: LogEmpleado){
    return this.http.post('http://127.0.0.1:8000/log_empleados', data);
  }
  update(data: LogEmpleado){
    return this.http.put('http://127.0.0.1:8000/log_empleados/' + data.id, data);
  }
  delete(id){
    return this.http.delete('http://127.0.0.1:8000/log_empleados/'+id);
  }
}
