import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';
import { FormsModule} from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoService } from './empleado/empleado.service';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EmpleadoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UsuarioService, EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
