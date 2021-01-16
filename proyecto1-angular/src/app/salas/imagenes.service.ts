import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { ImagenDetalle } from './imagen.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  
  constructor(private http:HttpClient) { }

  read(){
    return this.http.get(`${baseURL}/imagen`);
  }

  insert(data) {
    alert(`url: ${baseURL}/imagen`);
    return this.http.post(`${baseURL}/imagen`, { ...data });
  }

  update(data: ImagenDetalle){
    return this.http.put(`${baseURL}/imagen/${data.id}`, data);
  }

  delete(id){
    return this.http.delete(`${baseURL}/imagen/${id}`);
  }
  
}
