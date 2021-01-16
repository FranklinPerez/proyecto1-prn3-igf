import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { Sala } from './sala.model';


@Injectable({
  providedIn: 'root'
})
export class SalasService {
  data: Sala[];

  constructor (private http: HttpClient) { }

  read() {
    return this.http.get(`${baseURL}/salas`);
  }

  insert(data: Sala) {
    return this.http.post(`${baseURL}/salas`, data);
  }

  readOne(id: number) {
    return this.http.get(`${baseURL}/salas/${id}`);
  }

  update(data: Sala) {
    return this.http.put(`${baseURL}/salas/${data.id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseURL}/salas/${id}`);
  }

  getDataCanvas(mediaElement) {
    var context;
    var width = mediaElement.offsetWidth  , height = mediaElement.offsetHeight;

    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext('2d');
    context.drawImage(mediaElement, 0, 0, width, height);
    const canvasData = canvas.toDataURL('image/png');
    return canvasData;
  }

}
