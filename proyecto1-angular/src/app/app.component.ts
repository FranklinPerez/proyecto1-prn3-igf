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

  constructor (private cookieService: CookieService, private router: Router, private login: LoginService) {
    this.verificarSesion();
    this.sesionActiva = true; // delete
  }

  logout() {
    this.cookieService.set('tipo-usuario', '');
    this.cookieService.set('estado-sesion', 'cerrada');
    this.formGroup = new FormGroup({
      id: new FormControl(this.cookieService.get('usuario_id') ),
    });
     this.login.cerrarSesion(this.formGroup.value);
     console.log(this.formGroup.value);
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
    componentReference.onLoged.subscribe(() => {
      this.verificarSesion();
    })
 }

}
