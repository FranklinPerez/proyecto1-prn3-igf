import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from './login/login.service';
import { Usuario } from './usuario/usuario.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;
  current_usuario: Usuario;
  sesionActiva: boolean;
  title = 'SIMTRE';
   id: number = 0;

  constructor (private cookieService: CookieService , private router: Router, private login: LoginService) {
    this.verificarSesion();
    //this.sesionActiva = false; // delete
  }

  logout() {

    this.cookieService.set('tipo-usuario', '');
    this.cookieService.set('estado-sesion', 'cerrada');
    this.id = parseInt(this.cookieService.get('usuario_id'));
    console.log(this.id);
    this.login.cerrarSesion(this.id).subscribe();
    this.router.navigateByUrl('/login');
    this.sesionActiva = this.cookieService.get('estado-sesion') === 'activada';
    console.log(this.sesionActiva);
  }

  verificarSesion() {
    this.sesionActiva = this.cookieService.get('estado-sesion') === 'activada';
    if (!this.sesionActiva) {
      this.router.navigateByUrl('/login');
    }
  }

  onActivate(componentReference) {
    if (componentReference) {
      componentReference.onLoged.subscribe(() => {
        this.verificarSesion();
      })
    }

 }

}
