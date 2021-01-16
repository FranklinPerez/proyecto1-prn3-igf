import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { UsuariosService } from './usuarios.service';
import { Rol } from '../roles/rol.model'
import { RolesService } from '../roles/roles.service';
import { AuthService } from '../login/auth.service';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  public data: Usuario[];
  public current: Usuario;
  public roles: Rol[];

  constructor (
    private service: UsuariosService,
    private rolesService: RolesService,
    private authService: AuthService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
      console.log(res);
      this.current = new Usuario();
    });

    this.rolesService.read().subscribe((res: any[]) => {
      this.roles = res;
    });
    
    this.authService.getUsuarioActual().subscribe((res: Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.USUARIO);
    });
  }

  new() {
    this.current = new Usuario();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res => {
        this.current = new Usuario();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    } else {
      console.log('aqui esta el error');
    }

    this.service.update(this.current).subscribe(res => {
      this.current = new Usuario();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row) {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
    this.current.password = "";
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
    this.current.password = "";
  }

  onCancelBtn() {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable = true;
  }

}
