import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../usuario/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  data: Usuario[];
  private CookieValue: string;
  constructor(private LoginService: LoginService, private router: Router, private cookieService: CookieService) {
    this.data=[];
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
}

loginProcess(){
  if(this.formGroup.valid){
    this.LoginService.buscarUsuario(this.formGroup.value).subscribe(res => {
      if(res.resultado=="Inicio de sesion exitoso"){
        this.cookieService.set('tipo-usuario', 'administrador');
        this.cookieService.set('estado-sesion', 'activada');
        this.CookieValue = this.cookieService.get('tipo-usuario');
        this.CookieValue = this.cookieService.get('estado-sesion');
        console.log(this.CookieValue);
        this.router.navigateByUrl('/usuarios');
      }else{
        alert(res.resultado);
        this.ngOnInit();
      }
    });
  }
}


}
