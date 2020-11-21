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
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';
import { PanelNotificacionSalasComponent } from './panel-notificacion-salas/panel-notificacion-salas.component';
import { PanelNotificacionSalasService } from './panel-notificacion-salas/panel-notificacion-salas.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    EmpleadoComponent,
    PanelNotificacionSalasComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  

  providers: [UsuarioService, EmpleadoService, LoginService, PanelNotificacionSalasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
