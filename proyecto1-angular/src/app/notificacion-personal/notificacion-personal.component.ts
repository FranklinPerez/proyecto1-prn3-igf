import { Component, OnInit } from '@angular/core';
import { NotificacionPersonal } from './notificacion-personal.model';
import { NotificacionPersonalService } from './notificacion-personal.service';

@Component({
  selector: 'app-notificacion-personal',
  templateUrl: './notificacion-personal.component.html',
  styleUrls: ['./notificacion-personal.component.css']
})
export class NotificacionPersonalComponent implements OnInit {
  data: NotificacionPersonal[];
  current: NotificacionPersonal;
  crudOperation = { isNew: false, isVisible: false, isEditable: true }
  empleados = []
  constructor(private service: NotificacionPersonalService) {
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
  }

  new(){
    this.current = new NotificacionPersonal();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if (this.crudOperation.isNew) {
      console.log(this.current)
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
