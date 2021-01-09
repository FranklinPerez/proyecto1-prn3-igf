import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../usuario/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  data: Usuario[];
  private CookieValue: string;
  
  @Output() onLoged: EventEmitter<any> = new EventEmitter();
  
  constructor (private LoginService: LoginService, private router: Router, private cookieService: CookieService) {
    this.data = [];
    this.verificarSesion();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async loginProcess() {
    if (this.formGroup.valid) {
      this.LoginService.buscarUsuario(this.formGroup.value).subscribe(res => {
        if (res.resultado == "Inicio de sesion exitoso") {
          this.cookieService.set('tipo-usuario', 'administrador');
          this.cookieService.set('estado-sesion', 'activada');
          this.CookieValue = this.cookieService.get('tipo-usuario');
          this.CookieValue = this.cookieService.get('estado-sesion');
          this.onLoged.emit();
          this.router.navigateByUrl('/usuarios');
        } else {
          alert(res.resultado);
          this.ngOnInit();
        }
      });
    } else {
      alert("formulario invalido");
    }
  }
  verificarSesion() {
    this.CookieValue = this.cookieService.get('estado-sesion');
    if (this.CookieValue == "activada") {
      alert("ya hay una sesion abierta");
      this.router.navigateByUrl('/');
    }

  }
}
