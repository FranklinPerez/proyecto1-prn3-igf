import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { NotificacionPersonal } from '../notificacion-personal/notificacion-personal.model';
import { PanelPersonalService } from './panel-personal.service';

@Component({
  selector: 'app-panel-personal',
  templateUrl: './panel-personal.component.html',
  styleUrls: ['./panel-personal.component.css']
})
export class PanelPersonalComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  public misNotis: NotificacionPersonal[];
  public current: NotificacionPersonal;

  constructor (
    private service: PanelPersonalService,
    private authService: AuthService) {
    this.misNotis = [];
  }

  ngOnInit() {
    this.current = new NotificacionPersonal();
    
    this.authService.getUsuarioActual().subscribe((res:Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.PANEL_PERSONAL);
      if (this.currentUser) {
        this.service.read(this.currentUser.id).subscribe((res: any) => {
          this.misNotis = res;
          console.log(res);
        });
      }
    })
  }

  update() {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
    this.current = new NotificacionPersonal();
    this.service.read(this.currentUser.id).subscribe((res: any) => {
      this.misNotis = res;
      console.log(res);
    })
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }


}
