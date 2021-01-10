import { baseURL } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { RolsClase } from './rols.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolsServicioService {
  data: RolsClase[];

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get(`${baseURL}/rols/`);
  }
  insert(data: RolsClase){
    return this.http.post(`${baseURL}/rols/`, data);
  }
  update(data: RolsClase){
    return this.http.put(`${baseURL}/rols/${data.id}`, data);
  }
  delete(id){
    return this.http.delete(`${baseURL}/rols/${id}`);
  }
}
