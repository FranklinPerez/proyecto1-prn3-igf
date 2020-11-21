import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
<<<<<<< HEAD
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';
import { PanelNotificacionSalasComponent } from './panel-notificacion-salas/panel-notificacion-salas.component';
import { PanelNotificacionSalasService } from './panel-notificacion-salas/panel-notificacion-salas.service';
=======

import { FormsModule} from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';

>>>>>>> bbf0cbec53675f938079eb9f030ac4cac6cf3a57


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    EmpleadoComponent,
<<<<<<< HEAD
    PanelNotificacionSalasComponent,
=======
>>>>>>> bbf0cbec53675f938079eb9f030ac4cac6cf3a57


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
  

  providers: [UsuarioService, EmpleadoService, LoginService, PanelNotificacionSalasService ],
=======
  providers: [UsuarioService, LoginService],

  providers: [UsuarioService, EmpleadoService],
>>>>>>> bbf0cbec53675f938079eb9f030ac4cac6cf3a57
  bootstrap: [AppComponent]
})
export class AppModule { }
