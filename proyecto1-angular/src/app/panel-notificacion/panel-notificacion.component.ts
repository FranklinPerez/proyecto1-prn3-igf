import { Component, OnInit } from '@angular/core';
import { PanelNotificacion } from './panel-notificacion.model';
import { PanelNotificacionService } from './panel-notificacion.service';

@Component({
  selector: 'app-panel-notificacion',
  templateUrl: './panel-notificacion.component.html',
  styleUrls: ['./panel-notificacion.component.css']
})
export class PanelNotificacionComponent implements OnInit {
  data: PanelNotificacion[];
  current: PanelNotificacion;
  crudOperation = {isNew: false, isVisible:false}
  constructor(private service: PanelNotificacionService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new PanelNotificacion();
    });
  }

  new(){
    this.current = new PanelNotificacion();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new PanelNotificacion();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new PanelNotificacion();
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
  

}
