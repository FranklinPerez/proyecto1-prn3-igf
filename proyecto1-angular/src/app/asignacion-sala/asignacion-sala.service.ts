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
  readSalas() {
    return this.http.get(`${baseURL}/salas`);
  }

  readAsigSalas() {
    return this.http.get(`${baseURL}/asignacion`);
  }

  readEmpleados() {
    return this.http.get(`${baseURL}/empleados`);
  }

  insert(data: AsignacionSala) {
    return this.http.post(`${baseURL}/asignacion`, data);
  }

  readOne(id: number) {
    return this.http.get(`${baseURL}/asignacion/${id}`);
  }

  update(data: AsignacionSala) {
    return this.http.put(`${baseURL}/asignacion/${data.id_sala_asignada}`, data);
  }

  delete(data) {
    return this.http.delete(`${baseURL}/asignacion/${data}`);
  }

}
