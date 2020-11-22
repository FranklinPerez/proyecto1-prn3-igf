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
import { PanelComponent } from './panel/panel.component';
import { PanelService } from './panel/panel.service';







@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    EmpleadoComponent,

    PanelNotificacionSalasComponent,

    PanelComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],







  providers: [UsuarioService, EmpleadoService,PanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
