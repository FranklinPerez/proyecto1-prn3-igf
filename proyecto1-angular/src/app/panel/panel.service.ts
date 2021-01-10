import { Injectable } from '@angular/core';
import { Panel } from './panel.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  data: Panel[];

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get(`${baseURL}/panels`);
  }
  
  insert(data: Panel){
    return this.http.post(`${baseURL}/panels`, data);
  }

  update(data: Panel){
    return this.http.put(`${baseURL}/panels/${data.id}`, data);
  }

  delete(id){
    return this.http.delete(`${baseURL}/panels/${id}`);
  }

}
