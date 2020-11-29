import { Injectable } from '@angular/core';
import { Panel } from './panel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  data: Panel[];

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get('http://127.0.0.1:8000/panels');
  }
  insert(data: Panel){
    return this.http.post('http://127.0.0.1:8000/panels', data);
  }
  update(data: Panel){
    return this.http.put('http://127.0.0.1:8000/panels/' + data.id, data);
  }
  delete(id){
    return this.http.delete('http://127.0.0.1:8000/panels/'+id);
  }
}
