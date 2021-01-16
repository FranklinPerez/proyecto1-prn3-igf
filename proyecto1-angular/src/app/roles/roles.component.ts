import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { Rol} from './rol.model';
import { RolesService } from './roles.service';



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  public data: Rol[];
  public current: Rol;

  constructor (
    private service: RolesService,
    private authService: AuthService) {
    this.data=[];
   }

  ngOnInit() {

    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new Rol();
    });

    this.authService.getUsuarioActual().subscribe((res: Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.ROL);
    });

  }

  new(){
    this.current = new Rol();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new Rol();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new Rol();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
  }
  show(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.crudOperation.isEditable = false;
    this.current = row;
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }
  onCancelBtn()
  {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable=true;
  }


}
