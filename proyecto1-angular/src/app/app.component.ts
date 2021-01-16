import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import { Usuario } from './compartido/models/usuario.model';
import { FormGroup } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { PermisosRecurso, Recursos } from './compartido/roles.config';
import { getPermisosRecurso } from './compartido/validar-permiso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public formGroup: FormGroup;
  public currentUser: Usuario = null;
  public sesionActiva: boolean;

  public usuarioPermisos: PermisosRecurso = new PermisosRecurso();
  public rolPermisos: PermisosRecurso = new PermisosRecurso();
  public empleadoPermisos: PermisosRecurso = new PermisosRecurso();
  public logPermisos: PermisosRecurso = new PermisosRecurso();
  public notiPersPermisos: PermisosRecurso = new PermisosRecurso();
  public salaPermisos: PermisosRecurso = new PermisosRecurso();
  public asignPermisos: PermisosRecurso = new PermisosRecurso();

  constructor (
    private cookieService: CookieService,
    private router: Router,
    private login: LoginService,
    private authService: AuthService) {
    //this.sesionActiva = false; // delete
  }
  ngOnInit(): void {
    this.verificarSesion();
  }

  logout() {
    const id = parseInt(this.cookieService.get('usuario_id'));
    this.cookieService.set('tipo-usuario', '');
    this.cookieService.set('estado-sesion', 'cerrada');
    this.login.cerrarSesion(id).subscribe();
    this.router.navigateByUrl('/login');
    this.sesionActiva = this.cookieService.get('estado-sesion') === 'activada';
  }

  verificarSesion() {
    this.sesionActiva = this.cookieService.get('estado-sesion') === 'activada';
    if (!this.sesionActiva) {
      this.currentUser = null;
      this.router.navigateByUrl('/login');
    } else {
      this.authService.getUsuarioActual().subscribe((res: Usuario) => {
        this.currentUser = res;
        this.cargarPanel(); 
      });
    }

  }

  onActivate(componentReference) {
    if (componentReference) {
      try {
        componentReference.onLoged.subscribe(() => {
          this.verificarSesion();
        })
      } catch (error) {
        console.log("logeado")
      }
    }

  }

  cargarPanel() {
    this.usuarioPermisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.USUARIO);
    this.rolPermisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.ROL);
    this.empleadoPermisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.EMPLEADO);
    this.logPermisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.LOG_EMPLEADO);
    this.notiPersPermisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.NOTIFICACION_PERSONAL);
    this.salaPermisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.SALA);
    this.asignPermisos =  getPermisosRecurso(this.currentUser.nombrerol, Recursos.ASIGNACION_SALA);
  }

  haySesion() {
    return this.sesionActiva && !!this.currentUser;
  }

}
