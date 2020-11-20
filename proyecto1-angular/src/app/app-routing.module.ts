import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { EmpleadoComponent } from './empleado/empleado.component';
import { AppComponent } from './app.component';
>>>>>>> db882db1ad7e2b8b8113004e53c5dd2f51492adc


const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent},
<<<<<<< HEAD
    { path: 'login', component: LoginComponent}
=======
    { path: 'empleados', component: EmpleadoComponent}
>>>>>>> db882db1ad7e2b8b8113004e53c5dd2f51492adc
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
