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

  read(){
    return this.http.get(`${baseURL}/panels`);
  }
  insert(data: PanelNotificacion){
    return this.http.post(`${baseURL}/panels`, data);
  }
  update(data: PanelNotificacion){
    return this.http.put(`${ baseURL }/panels/${ data.id }`, data);
  }
  delete(id){
    return this.http.delete(`${baseURL}/panels/${id}`);
  }
}
