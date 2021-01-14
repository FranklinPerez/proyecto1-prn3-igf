import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { AsignacionSala } from './asignacion-sala';

@Injectable({
  providedIn: 'root'
})
export class AsignacionSalaService {
  data: AsignacionSala[];
  constructor(private http: HttpClient) { }
  read() {
    return this.http.get(`${baseURL}/salas`);
  }

  readUsuarios() {
    return this.http.get(`${baseURL}/usuarios`);
  }

  insert(data: AsignacionSala) {
    return this.http.post(`${baseURL}/salas`, data);
  }

  readOne(id: number) {
    return this.http.get(`${baseURL}/salas/${id}`);
  }

  update(data: AsignacionSala) {
    return this.http.put(`${baseURL}/salas/${data.id_sala_asignada}`, data);
  }

  delete(data) {
    return this.http.delete(`${baseURL}/salas/${data}`);
  }
}
