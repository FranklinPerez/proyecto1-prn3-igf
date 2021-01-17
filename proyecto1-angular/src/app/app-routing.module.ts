import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NotificacionSalasComponent } from './notificacion-salas/notificacion-salas.component';
import { RolesComponent } from './roles/roles.component';
import { SalasComponent } from './salas/salas.component';
import { NotificacionPersonalComponent } from './notificacion-personal/notificacion-personal.component';
import { PanelPersonalComponent } from './panel-personal/panel-personal.component';
import { AsignacionSalaComponent } from './asignacion-sala/asignacion-sala.component';
import { InstanciaSalaComponent } from './instancia-sala/instancia-sala.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'salas', component: SalasComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'log_empleados', component: LogEmpleadoComponent },
    { path: 'noti-salas', component: NotificacionSalasComponent },
    { path: 'panel-personal', component: PanelPersonalComponent },
    { path: 'asignacionsalas', component: AsignacionSalaComponent },
    { path: 'noti-personales', component: NotificacionPersonalComponent },
    { path: 'mis-salas', component: InstanciaSalaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
