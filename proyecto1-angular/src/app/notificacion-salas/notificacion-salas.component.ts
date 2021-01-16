import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos, Roles } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { NotificacionSala } from './notificacion-sala.model';
import { NotificacionSalasService } from './notificacion-salas.service';

@Component({
  selector: 'app-notificacion-salas',
  templateUrl: './notificacion-salas.component.html',
  styleUrls: ['./notificacion-salas.component.css']
})
export class NotificacionSalasComponent implements OnInit {

  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso(); // por defecto pone en false todo
  public currentUser: Usuario;
  
  public data: NotificacionSala[];
  public current: NotificacionSala;

  constructor (private service: NotificacionSalasService,private authService: AuthService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
      this.current = new NotificacionSala();
    });
    this.authService.getUsuarioActual().subscribe((res:Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.NOTIFICACION_SALA);
    })
  }

  new() {
    this.current = new NotificacionSala();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res => {
        this.current = new NotificacionSala();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res => {
      this.current = new NotificacionSala();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row) {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }

  show(row) {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.crudOperation.isEditable = false;
    this.current = row;
  }

  onCancelBtn() {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable = true;
  }
}
