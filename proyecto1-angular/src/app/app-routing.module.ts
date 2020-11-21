import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

import { LoginComponent } from './login/login.component';

import { EmpleadoComponent } from './empleado/empleado.component';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import { PanelNotificacionSalasComponent } from './panel-notificacion-salas/panel-notificacion-salas.component';

=======
>>>>>>> bbf0cbec53675f938079eb9f030ac4cac6cf3a57


const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent},

    { path: 'login', component: LoginComponent},

<<<<<<< HEAD
    { path: 'empleados', component: EmpleadoComponent},

    { path: 'panels', component: PanelNotificacionSalasComponent}
=======
    { path: 'empleados', component: EmpleadoComponent}
>>>>>>> bbf0cbec53675f938079eb9f030ac4cac6cf3a57

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
