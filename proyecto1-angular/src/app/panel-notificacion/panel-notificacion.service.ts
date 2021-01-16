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
  
  readUsuario(id) {
    return this.http.get(`${baseURL}/usuarios/${id}`);
  }

  read(id){
    return this.http.get(`${baseURL}/mynotis/${id}`,);
  }
  delete(id){
    return this.http.delete(`${baseURL}/notificacionPersonal/${id}`);
  }
}