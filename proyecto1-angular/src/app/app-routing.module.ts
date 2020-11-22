import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LogEmpleadoComponent } from './log-empleado/log-empleado.component';
import { LoginComponent } from './login/login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';






const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent},
    { path: 'login', component: LoginComponent},
    {path: 'log_empleados', component: LogEmpleadoComponent},
    { path: 'empleados', component: EmpleadoComponent},
    { path: 'panels', component: PanelComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
