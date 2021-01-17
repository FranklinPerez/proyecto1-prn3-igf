import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { LogEmpleado } from './log-empleado.model';
import { LogEmpleadoService } from './log-empleado.service';

@Component({
  selector: 'app-log-empleado',
  templateUrl: './log-empleado.component.html',
  styleUrls: ['./log-empleado.component.css']
})
export class LogEmpleadoComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  public data: LogEmpleado[];
  public current: LogEmpleado;

  constructor (
    private service: LogEmpleadoService,
    private authService: AuthService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new LogEmpleado();
    });
    this.authService.getUsuarioActual().subscribe((res: Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.LOG_EMPLEADO);
    });
  }

  new(){
    this.current = new LogEmpleado();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new LogEmpleado();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new LogEmpleado();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
  }

  verImagen(row){
    this.service.readImagen(row.id).subscribe((res) => {
      console.log(res);
    })
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }
}
