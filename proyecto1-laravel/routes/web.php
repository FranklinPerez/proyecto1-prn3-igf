<?php
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::resource('usuarios', 'UsuarioController');
Route::post('logins', 'LoginController@buscarUsuario');
Route::resource('empleados', 'EmpleadoController');
Route::resource('log_empleados','LogEmpleadoController');
Route::resource('rols', 'RolController');
Route::resource('panels', 'PanelController');
Route::resource('imagen', 'imagenController');
Route::resource('notificacionPersonal', 'notificacionPersonalController');
Route::resource('reporte', 'ReporteController');
Route::resource('sala', 'salaController');
Route::resource('detalle', 'detalleReporteController');


