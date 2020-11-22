import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent},
    { path: 'login', component: LoginComponent},
    {path: 'log_empleados', component: LogEmpleadoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
