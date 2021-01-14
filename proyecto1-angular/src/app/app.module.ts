import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LogEmpleadoService } from './log-empleado/log-empleado.service';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';
import { PanelComponent } from './panel/panel.component';
import { PanelService } from './panel/panel.service';
import { RolsComponenteComponent } from './rols-componente/rols-componente.component';
import { RolsServicioService } from './rols-componente/rols-servicio.service';
import { SalaComponent } from './sala/sala.component';
import { PanelNotificacionComponent } from './panel-notificacion/panel-notificacion.component';
import { PanelNotificacionService } from './panel-notificacion/panel-notificacion.service';
import { SalaService } from './sala/sala.service';
import { NotificacionPersonalComponent } from './notificacion-personal/notificacion-personal.component';
import { NotificacionPersonalService } from './notificacion-personal/notificacion-personal.service';
import { AsignacionSalaComponent } from './asignacion-sala/asignacion-sala.component';
import { AsignacionSalaService } from './asignacion-sala/asignacion-sala.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    LogEmpleadoComponent,
    EmpleadoComponent,
    PanelComponent,
    PanelNotificacionComponent,
    RolsComponenteComponent,
    SalaComponent,
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
    UsuarioService,
    LoginService,
    LogEmpleadoService,
    EmpleadoService,
    PanelService,
    PanelNotificacionService,
    RolsServicioService,
    SalaService,
    NotificacionPersonalService,
    AsignacionSalaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
