import { Component, OnInit } from '@angular/core';
import { LogEmpleado } from './log-empleado';
import { LogEmpleadoService } from './log-empleado.service';

@Component({
  selector: 'app-log-empleado',
  templateUrl: './log-empleado.component.html',
  styleUrls: ['./log-empleado.component.css']
})
export class LogEmpleadoComponent implements OnInit {
  data: LogEmpleado[];
  current_usuario: LogEmpleado;
  crud_operation = {is_new: false, is_visible:false}
  constructor(private service: LogEmpleadoService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current_usuario= new LogEmpleado();
    });
  }

  new(){
    this.current_usuario = new LogEmpleado();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_usuario).subscribe(res=>{
        this.current_usuario = new LogEmpleado();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_usuario).subscribe(res=>{
      this.current_usuario = new LogEmpleado();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_usuario = row;
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }
}
