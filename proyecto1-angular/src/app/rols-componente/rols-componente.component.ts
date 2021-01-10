import { Component, OnInit } from '@angular/core';
import { RolsClase} from './rols.model';
import { RolsServicioService } from './rols-servicio.service';



@Component({
  selector: 'app-rols-componente',
  templateUrl: './rols-componente.component.html',
  styleUrls: ['./rols-componente.component.css']
})
export class RolsComponenteComponent implements OnInit {
  data: RolsClase[];
  current: RolsClase;
  crudOperation = {isNew: false, isVisible:false, isEditable:true}
  constructor(private service: RolsServicioService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current= new RolsClase();
    });
  }

  new(){
    this.current = new RolsClase();
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = true;
  }

  save(){
    if(this.crudOperation.isNew){
      this.service.insert(this.current).subscribe(res=>{
        this.current = new RolsClase();
        this.crudOperation.isVisible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current).subscribe(res=>{
      this.current = new RolsClase();
      this.crudOperation.isVisible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.current = row;
  }
  show(row){
    this.crudOperation.isVisible = true;
    this.crudOperation.isNew = false;
    this.crudOperation.isEditable = false;
    this.current = row;
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crudOperation.isNew = false;
      this.ngOnInit();
    });
  }
  onCancelBtn()
  {
    this.crudOperation.isVisible = false;
    this.crudOperation.isEditable=true;
  }


}
