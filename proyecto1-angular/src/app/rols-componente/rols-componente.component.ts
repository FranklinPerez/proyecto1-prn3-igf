import { Component, OnInit } from '@angular/core';
import { RolsClase} from './rols-clase';
import { RolsServicioService } from './rols-servicio.service';



@Component({
  selector: 'app-rols-componente',
  templateUrl: './rols-componente.component.html',
  styleUrls: ['./rols-componente.component.css']
})
export class RolsComponenteComponent implements OnInit {
  data: RolsClase[];
  current_produ: RolsClase;
  crud_operation = {is_new: false, is_visible:false}
  constructor(private service: RolsServicioService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current_produ= new RolsClase();
    });
  }

  new(){
    this.current_produ = new RolsClase();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_produ).subscribe(res=>{
        this.current_produ = new RolsClase();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_produ).subscribe(res=>{
      this.current_produ = new RolsClase();
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
