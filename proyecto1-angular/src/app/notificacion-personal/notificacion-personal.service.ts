import { Injectable } from '@angular/core';
import { NotificacionPersonal } from './notificacion-personal.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotificacionPersonalService {
  data: NotificacionPersonal[];

  constructor(private http: HttpClient) { }

  readEmpleados() {
    return this.http.get(`${baseURL}/empleados`);
  }

  read(){
    return this.http.get(`${baseURL}/notificacionPersonal`);
  }
  insert(data: NotificacionPersonal){
    return this.http.post(`${baseURL}/notificacionPersonal`, data);
  }
  update(data: NotificacionPersonal){
    return this.http.put(`${ baseURL }/notificacionPersonal/${ data.id }`, data);
  }
  delete(id){
    return this.http.delete(`${baseURL}/notificacionPersonal/${id}`);
  }
}
