import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios/usuarios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LogEmpleadoService } from './log-empleado/log-empleado.service';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosService } from './empleados/empleados.service';
import { NotificacionSalasComponent } from './notificacion-salas/notificacion-salas.component';
import { NotificacionSalasService } from './notificacion-salas/notificacion-salas.service';
import { RolesComponent } from './roles/roles.component';
import { RolesService } from './roles/roles.service';
import { SalasComponent } from './salas/salas.component';
import { PanelPersonalComponent } from './panel-personal/panel-personal.component';
import { PanelPersonalService } from './panel-personal/panel-personal.service';
import { SalasService } from './salas/salas.service';
import { NotificacionPersonalComponent } from './notificacion-personal/notificacion-personal.component';
import { NotificacionPersonalService } from './notificacion-personal/notificacion-personal.service';
import { AsignacionSalaComponent } from './asignacion-sala/asignacion-sala.component';
import { AsignacionSalaService } from './asignacion-sala/asignacion-sala.service';
import { ImagenesService } from './salas/imagenes.service';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    LogEmpleadoComponent,
    EmpleadosComponent,
    NotificacionSalasComponent,
    PanelPersonalComponent,
    RolesComponent,
    SalasComponent,
    NotificacionPersonalComponent,
    AsignacionSalaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    UsuariosService,
    LoginService,
    AuthService,
    LogEmpleadoService,
    EmpleadosService,
    NotificacionSalasService,
    PanelPersonalService,
    RolesService,
    SalasService,
    NotificacionPersonalService,
    AsignacionSalaService,
    ImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
