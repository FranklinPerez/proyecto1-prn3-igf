import { Injectable } from '@angular/core';
import { PanelNotificacion } from './panel-notificacion.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PanelNotificacionService {
  data: PanelNotificacion[];

  constructor(private http: HttpClient) { }

  readEmpleados() {
    return this.http.get(`${baseURL}/empleados`);
  }
  
  read(){
    return this.http.get(`${baseURL}/notificacionPersonal`);
  }
  delete(id){
    return this.http.delete(`${baseURL}/notificacionPersonal/${id}`);
  }
}
