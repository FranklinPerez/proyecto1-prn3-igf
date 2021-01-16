import { Injectable } from '@angular/core';
import { NotificacionSala } from './notificacion-sala.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionSalasService {
  data: NotificacionSala[];

  constructor (private http: HttpClient) { }

  readOne(id: number) {
    return this.http.get(`${baseURL}/panels/${id}`);
  }

  read() {
    return this.http.get(`${baseURL}/panels`);
  }

  insert(data: NotificacionSala) {
    return this.http.post(`${baseURL}/panels`, data);
  }

  update(data: NotificacionSala) {
    return this.http.put(`${baseURL}/panels/${data.id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseURL}/panels/${id}`);
  }

}
