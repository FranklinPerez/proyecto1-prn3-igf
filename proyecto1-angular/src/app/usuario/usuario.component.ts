import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  data: Usuario[];
  current_usuario: Usuario;
  crud_operation = {is_new: false, is_visible:false}
  constructor(private service: UsuarioService ) {
    this.data = [];
   }

  ngOnInit() {
    this.service.read().subscribe( (res: any[]) =>{
      this.data=res;
      this.current_usuario= new Usuario();
    });
  }

  new(){
    this.current_usuario = new Usuario();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  save() {
    //alert(JSON.stringify(form))
    if (this.crud_operation.is_new) {
      alert(JSON.stringify(this.current_usuario.username))
      if (!this.current_usuario.username) {
        alert('usuario vacio');
        return;
      }
      this.service.insert(this.current_usuario).subscribe(res=>{
        this.current_usuario = new Usuario();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    } else {
      console.log('aqui esta el error');
    }

    this.service.update(this.current_usuario).subscribe(res=>{
      this.current_usuario = new Usuario();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }

  edit(row){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_usuario = row;
    this.current_usuario.password = "";
  }

  delete(id){
    this.service.delete(id).subscribe(res=>{
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

}
