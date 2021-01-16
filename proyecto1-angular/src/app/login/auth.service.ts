import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from './../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService ) { }
    
  getUsuarioActual() {
    const id = parseInt(this.cookieService.get('usuario_id'));
    return this.http.get(`${baseURL}/usuarios/${id}`);
  }

}
