import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LoginComponent } from './login/login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PanelComponent } from './panel/panel.component';
import { RolsComponenteComponent } from './rols-componente/rols-componente.component';
import { SalaComponent } from './sala/sala.component';
import { NotificacionPersonalComponent } from './notificacion-personal/notificacion-personal.component';
import { PanelNotificacionComponent } from './panel-notificacion/panel-notificacion.component';

const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'log_empleados', component: LogEmpleadoComponent },
    { path: 'empleados', component: EmpleadoComponent },
    { path: 'panels', component: PanelComponent },
    { path: 'noti-panels', component: PanelNotificacionComponent },
    { path: 'rols', component: RolsComponenteComponent },
    { path: 'salas', component: SalaComponent },
    { path: 'noti-personales', component: NotificacionPersonalComponent },
    { path: 'logout', component: LoginComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
