import { baseURL } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Rol } from './rol.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  data: Rol[];

  constructor (private http: HttpClient) { }

  readOne(id: number) {
    return this.http.get(`${baseURL}/rols/${id}`);
  }

  read() {
    return this.http.get(`${baseURL}/rols`);
  }

  insert(data: Rol) {
    return this.http.post(`${baseURL}/rols`, data);
  }

  update(data: Rol) {
    return this.http.put(`${baseURL}/rols/${data.id}`, data);
  }
  
  delete(id) {
    return this.http.delete(`${baseURL}/rols/${id}`);
  }
}
