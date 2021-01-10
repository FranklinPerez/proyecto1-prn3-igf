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

  read(){
    return this.http.get(`${baseURL}/panels`);
  }
  insert(data: NotificacionPersonal){
    return this.http.post(`${baseURL}/panels`, data);
  }
  update(data: NotificacionPersonal){
    return this.http.put(`${ baseURL }/panels/${ data.id }`, data);
  }
  delete(id){
    return this.http.delete(`${baseURL}/panels/${id}`);
  }
}
