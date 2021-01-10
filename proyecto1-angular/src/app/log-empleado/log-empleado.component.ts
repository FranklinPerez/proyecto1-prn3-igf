import { Component, OnInit } from '@angular/core';
import { LogEmpleado } from './log-empleado.model';
import { LogEmpleadoService } from './log-empleado.service';

@Component({
  selector: 'app-log-empleado',
  templateUrl: './log-empleado.component.html',
  styleUrls: ['./log-empleado.component.css']
})
export class LogEmpleadoComponent implements OnInit {
  data: LogEmpleado[];
  current: LogEmpleado;
  crudOperation = {isNew: false, isVisible:false}
  constructor(private service: LogEmpleadoService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new LogEmpleado();
    });
  }

  new(){
    this.current = new LogEmpleado();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new LogEmpleado();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new LogEmpleado();
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
