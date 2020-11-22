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
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LogEmpleadoService } from './log-empleado/log-empleado.service';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    LogEmpleadoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService, LoginService, LogEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
