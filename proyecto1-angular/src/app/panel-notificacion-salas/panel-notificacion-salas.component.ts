import { Component, OnInit } from '@angular/core';
import { PanelNotificacionSala } from './panel-notificacion-salas.model';
import { PanelNotificacionSalasService } from './panel-notificacion-salas.service';

@Component({
  selector: 'app-panel-notificacion-salas',
  templateUrl: './panel-notificacion-salas.component.html',
  styleUrls: ['./panel-notificacion-salas.component.css']
})
export class PanelNotificacionSalasComponent implements OnInit {
  data: PanelNotificacionSala[];
  current: PanelNotificacionSala;
  crudOperation = {isNew: false, isVisible:false}
  constructor(private service: PanelNotificacionSalasService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new PanelNotificacionSala();
    });
  }

  new(){
    this.current = new PanelNotificacionSala();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new PanelNotificacionSala();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new PanelNotificacionSala();
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
