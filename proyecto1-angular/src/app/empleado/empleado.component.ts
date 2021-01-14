import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario.model';
import { Empleado } from './empleado.model';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  data: Empleado[];
  usuarios:Usuario[];
  current: Empleado;
  crudOperation = {isNew: false, isVisible:false, isEditable:true}
  constructor(private service: EmpleadoService) {
    this.data=[];
    this.usuarios;
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new Empleado();
    });

    this.service.readUsuarios().subscribe((res:any[])=>{
        this.usuarios=res;
    });
  }

  new(){
    this.current = new Empleado();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new Empleado();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new Empleado();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
    alert(JSON.stringify(this.current))
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }
  show(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.crudOperation.isEditable=false;
    this.current = row;
    alert(JSON.stringify(this.current))
  }
  onCancelBtn(){
    this.crudOperation.isVisible=false;
    this.crudOperation.isEditable=true;
  }

}
