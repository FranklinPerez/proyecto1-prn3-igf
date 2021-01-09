import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_usuario: Usuario;
  sesionActiva: boolean;
  title = 'SIMTRE';

  constructor (private cookieService: CookieService, private router: Router) {
    this.verificarSesion();
    //this.sesionActiva = true; // delete 
  }

  logout() {
    this.cookieService.set('tipo-usuario', '');
    this.cookieService.set('estado-sesion', 'cerrada');
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
