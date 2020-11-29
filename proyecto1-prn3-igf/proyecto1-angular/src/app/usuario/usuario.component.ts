import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-producto',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  data: Usuario[];
  current_usuario: Usuario;
  private CookieValue: string;
  crud_operation = {is_new: false, is_visible:false}
  constructor(private service: UsuarioService, private cookieService: CookieService, private router: Router) {
    this.data=[];
    this.verificarSesion();
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

  save(){
    if(this.crud_operation.is_new){
      this.service.insert(this.current_usuario).subscribe(res=>{
        this.current_usuario = new Usuario();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
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

  logout(){
    this.cookieService.set('tipo-usuario', '');
      this.cookieService.set('estado-sesion', 'cerrada');
    this.router.navigateByUrl('/login');
    this.CookieValue = this.cookieService.get('estado-sesion');
        console.log(this.CookieValue);
  }

  verificarSesion(){
    this.CookieValue = this.cookieService.get('estado-sesion');
    if(this.CookieValue=="cerrada"||this.CookieValue==""){
      this.router.navigateByUrl('/login');
    }

  }
}
