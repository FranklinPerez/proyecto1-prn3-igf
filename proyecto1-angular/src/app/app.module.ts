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
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LogEmpleadoService } from './log-empleado/log-empleado.service';
=======
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';
import { PanelNotificacionSalasComponent } from './panel-notificacion-salas/panel-notificacion-salas.component';
import { PanelNotificacionSalasService } from './panel-notificacion-salas/panel-notificacion-salas.service';
import { PanelComponent } from './panel/panel.component';
import { PanelService } from './panel/panel.service';




>>>>>>> 9361ce7123a8177aa801150e33c39eda5353a562



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
<<<<<<< HEAD
    LogEmpleadoComponent,
=======
    EmpleadoComponent,

    PanelNotificacionSalasComponent,

    PanelComponent,



>>>>>>> 9361ce7123a8177aa801150e33c39eda5353a562

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
  providers: [UsuarioService, LoginService, LogEmpleadoService],
=======







<<<<<<< HEAD
  providers: [UsuarioService, EmpleadoService,PanelService],
=======
  providers: [UsuarioService, EmpleadoService],
>>>>>>> 9361ce7123a8177aa801150e33c39eda5353a562
>>>>>>> 2cb0b6c6427b90af78ddabd7997898716d933d25
  bootstrap: [AppComponent]
})
export class AppModule { }
