import { Component, OnInit } from '@angular/core';
import { getPermisosRecurso, PermisosRecurso, Recursos, Roles } from '../compartido/roles.config';
import { Panel } from './panel.model';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  data: Panel[];
  current: Panel;
  crudOperation = { isNew: false, isVisible: false };
  permisos: PermisosRecurso = new PermisosRecurso(); // por defecto pone en false todo
    
  constructor (private service: PanelService) {
    this.data = [];
    this.getPermisos();
  }

  ngOnInit() {
    this.service.read().subscribe((res: any[]) => {
      this.data = res;
      this.current = new Panel();
    });
  }

  new() {
    this.current = new Panel();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save() {
    if (this.crudOperation.isNew) {
      this.service.insert(this.current).subscribe(res => {
        this.current = new Panel();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res => {
      this.current = new Panel();
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

  // capturar el rol del usuario y pasar con el enum Roles correspondiente
  getPermisos() {
    this.permisos = getPermisosRecurso(Roles.ADMIN, Recursos.PANEL);
  }

}
