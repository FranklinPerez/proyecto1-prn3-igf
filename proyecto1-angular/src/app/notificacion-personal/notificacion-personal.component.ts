import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { NotificacionPersonal } from './notificacion-personal.model';
import { NotificacionPersonalService } from './notificacion-personal.service';

@Component({
  selector: 'app-notificacion-personal',
  templateUrl: './notificacion-personal.component.html',
  styleUrls: ['./notificacion-personal.component.css']
})
export class NotificacionPersonalComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  data: NotificacionPersonal[];
  current: NotificacionPersonal;
  empleados = [];

  constructor (
    private service: NotificacionPersonalService,
    private authService: AuthService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new NotificacionPersonal();
    });
    this.service.readEmpleados().subscribe((res: any[]) => {
      this.empleados = res;
    })
    this.authService.getUsuarioActual().subscribe((res:Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.NOTIFICACION_PERSONAL);
    })
  }

  new(){
    this.current = new NotificacionPersonal();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res=>{
        this.current = new NotificacionPersonal();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new NotificacionPersonal();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
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
