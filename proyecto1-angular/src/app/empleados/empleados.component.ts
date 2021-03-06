import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  public data: any[];
  public usuarios:Usuario[];
  public current: any;
  
  constructor (
    private service: EmpleadosService,
    private usuariosService: UsuariosService,
    private authService: AuthService) {
    this.data=[];
    this.usuarios=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new Empleado();
    });

    this.usuariosService.readDisponibles().subscribe((res:any[])=>{
        this.usuarios=res;
    });

    this.authService.getUsuarioActual().subscribe((res: Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.EMPLEADO);
    });

  }

  new(){
    this.current = new Empleado();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      console.log(this.current.usuario_id);
      this.service.insert(this.current).subscribe(res=>{
        this.current = new Empleado();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new Empleado();
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
  show(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.crudOperation.isEditable=false;
    this.current = row;
    alert(JSON.stringify(this.current))
  }
  onCancelBtn(){
    this.crudOperation.isVisible=false;
    this.crudOperation.isEditable=true;
  }

}
