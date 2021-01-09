import { Injectable } from '@angular/core';
import { PanelNotificacionSala } from './panel-notificacion-salas';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PanelNotificacionSalasService {
  data: PanelNotificacionSala[];

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get(`${baseURL}/panels`);
  }
  insert(data: PanelNotificacionSala){
    return this.http.post(`${baseURL}/panels`, data);
  }
  update(data: PanelNotificacionSala){
    return this.http.put(`${ baseURL }/panels/${ data.id }`, data);
  }
  delete(id){
    return this.http.delete(`${baseURL}/panels/${id}`);
  }
}
