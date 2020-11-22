import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
<<<<<<< HEAD
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LoginComponent } from './login/login.component';
=======

import { LoginComponent } from './login/login.component';

import { EmpleadoComponent } from './empleado/empleado.component';
import { AppComponent } from './app.component';


import { PanelNotificacionSalasComponent } from './panel-notificacion-salas/panel-notificacion-salas.component';



>>>>>>> 9361ce7123a8177aa801150e33c39eda5353a562


const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent},
<<<<<<< HEAD
    { path: 'login', component: LoginComponent},
    {path: 'log_empleados', component: LogEmpleadoComponent}
=======

    { path: 'login', component: LoginComponent},

    { path: 'empleados', component: EmpleadoComponent},

    { path: 'panels', component: PanelNotificacionSalasComponent}


>>>>>>> 9361ce7123a8177aa801150e33c39eda5353a562
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
