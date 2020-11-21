import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  data: Empleado[];

  constructor(private http: HttpClient) { }
  read(){
    return this.http.get('http://127.0.0.1:8000/empleados');
  }
  insert(data: Empleado){
    return this.http.post('http://127.0.0.1:8000/empleados', data);
  }
  update(data: Empleado){
    return this.http.put('http://127.0.0.1:8000/empleados/' + data.id, data);
  }
  delete(id){
    return this.http.delete('http://127.0.0.1:8000/empleados/'+id);
  }
}
