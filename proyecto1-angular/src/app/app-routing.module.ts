import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

import { LoginComponent } from './login/login.component';

import { EmpleadoComponent } from './empleado/empleado.component';
import { AppComponent } from './app.component';



const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent},

    { path: 'login', component: LoginComponent},

    { path: 'empleados', component: EmpleadoComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
