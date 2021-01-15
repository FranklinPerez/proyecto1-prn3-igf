import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { RolsClase } from '../rols-componente/rols.model'

@Component({
  selector: 'app-producto',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  data: Usuario[];
  current: Usuario;
  roles: RolsClase[];
  crudOperation = { isNew: false, isVisible: false, isEditable: true }
  constructor (private service: UsuarioService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
      this.current = new Usuario();
    });

    this.service.readRoles().subscribe((res: any[]) => {
      this.roles = res;
    });
  }

  new() {
    this.current = new Usuario();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      alert(JSON.stringify(this.current.username))
      if (!this.current.username) {
        alert('usuario vacio');
        return;
      }
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
