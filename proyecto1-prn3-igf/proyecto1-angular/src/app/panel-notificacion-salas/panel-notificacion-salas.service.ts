import { Injectable } from '@angular/core';
import { PanelNotificacionSala } from './panel-notificacion-salas';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PanelNotificacionSalasService {
  data: PanelNotificacionSala[];

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/panels');
  }
  insert(data: PanelNotificacionSala){
    return this.http.post('http://127.0.0.1:8000/panels', data);
  }
  update(data: PanelNotificacionSala){
    return this.http.put('http://127.0.0.1:8000/panels/' + data.id, data);
  }
  delete(id){
    return this.http.delete('http://127.0.0.1:8000/panels/'+id);
  }
}
