import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  
  readUsuario(id) {
    return this.http.get(`${baseURL}/usuarios/${id}`);
  }

}