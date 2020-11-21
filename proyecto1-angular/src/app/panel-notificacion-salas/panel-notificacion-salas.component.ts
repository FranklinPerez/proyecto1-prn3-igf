import { Component, OnInit } from '@angular/core';
import { PanelNotificacionSala } from './panel-notificacion-salas';
import { PanelNotificacionSalasService } from './panel-notificacion-salas.service';

@Component({
  selector: 'app-panel-notificacion-salas',
  templateUrl: './panel-notificacion-salas.component.html',
  styleUrls: ['./panel-notificacion-salas.component.css']
})
export class PanelNotificacionSalasComponent implements OnInit {
  data: PanelNotificacionSala[];
  current_produ: PanelNotificacionSala;
  crud_operation = {is_new: false, is_visible:false}
  constructor(private service: PanelNotificacionSalasService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current_produ= new PanelNotificacionSala();
    });
  }

  new(){
    this.current_produ = new PanelNotificacionSala();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
        this.current_produ = new PanelNotificacionSala();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produ = new PanelNotificacionSala();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_produ = row;
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }
  

}
