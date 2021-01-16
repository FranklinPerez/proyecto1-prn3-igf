import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { NotificacionPersonal } from '../notificacion-personal/notificacion-personal.model';

@Injectable({
  providedIn: 'root'
})
export class PanelPersonalService {
  data: NotificacionPersonal[];

  constructor(private http: HttpClient) { }

  read(id){
    return this.http.get(`${baseURL}/mynotis/${id}`,);
  }

  delete(id){
    return this.http.delete(`${baseURL}/notificacionPersonal/${id}`);
  }
  
}