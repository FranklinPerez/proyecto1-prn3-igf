import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../compartido/models/usuario.model';
import { PermisosRecurso, Recursos } from '../compartido/roles.config';
import { getPermisosRecurso } from '../compartido/validar-permiso';
import { AuthService } from '../login/auth.service';
import { ImagenDetalle } from './imagen.model';
import { ImagenesService } from './imagenes.service';
import { Sala } from './sala.model';
import { SalasService } from './salas.service';
//import * as screenshot from 'screenshot-desktop';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  public crudOperation = { isNew: false, isVisible: false, isEditable: true }
  public permisos: PermisosRecurso = new PermisosRecurso();
  public currentUser: Usuario;

  data: Sala[];
  current: Sala;

  constructor (private service: SalasService,
    private imagenService: ImagenesService,
    private cookieService: CookieService,
    private authService: AuthService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
    });
    const id = parseInt(this.cookieService.get('usuario_id'));
    this.authService.getUsuarioActual().subscribe((res:Usuario) => {
      this.currentUser = res;
      this.permisos = getPermisosRecurso(this.currentUser.nombrerol, Recursos.SALA);
    })

  }

  new() {
    this.current = new Sala();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res => {
        this.current = new Sala();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res => {
      this.current = new Sala();
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
    this.service.readOne(row.id).subscribe(res => {
      this.crudOperation.isVisible = true;
      this.crudOperation.isNew = false;
      this.crudOperation.isEditable = false;
      this.current = row;
      this.ngOnInit();
    });
  }

  onCancelBtn() {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable = true;
  }

}
