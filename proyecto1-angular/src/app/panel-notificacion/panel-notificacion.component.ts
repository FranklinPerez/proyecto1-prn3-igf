import { Component, OnInit } from '@angular/core';
import { PanelNotificacion } from './panel-notificacion.model';
import { PanelNotificacionService } from './panel-notificacion.service';

@Component({
  selector: 'app-panel-notificacion',
  templateUrl: './panel-notificacion.component.html',
  styleUrls: ['./panel-notificacion.component.css']
})
export class PanelNotificacionComponent implements OnInit {
  misNotis: PanelNotificacion[];
  current: PanelNotificacion;
  crudOperation = {isNew: false, isVisible:false}
  constructor(private service: PanelNotificacionService) {
    this.misNotis=[];
   }

  ngOnInit() {
    this.current= new PanelNotificacion();
    this.service.read().subscribe( (res: any[]) =>{
      this.misNotis=res;
    });
  }

  update() {
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
    this.current = new PanelNotificacion();
    this.service.read().subscribe((res: any[]) => {
      this.misNotis=res;
      console.log(res);
    })
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }
  

}
