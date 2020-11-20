import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
=======
import { FormsModule} from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';
>>>>>>> db882db1ad7e2b8b8113004e53c5dd2f51492adc



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
<<<<<<< HEAD
    LoginComponent,
=======
    EmpleadoComponent,
>>>>>>> db882db1ad7e2b8b8113004e53c5dd2f51492adc

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
  providers: [UsuarioService, LoginService],
=======
  providers: [UsuarioService, EmpleadoService],
>>>>>>> db882db1ad7e2b8b8113004e53c5dd2f51492adc
  bootstrap: [AppComponent]
})
export class AppModule { }
