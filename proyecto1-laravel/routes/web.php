<?php

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
Route::resource('login', 'LoginController');
Route::get('login/{username}/{password}', 'LoginController@buscarUsuario');
Route::resource('empleados', 'EmpleadoController');
Route::resource('log_empleados','LogEmpleadoController');
Route::resource('roles', 'RolesController');
<<<<<<< HEAD
Route::resource('panels', 'PanelNotificacionSalasController');


=======
>>>>>>> bbf0cbec53675f938079eb9f030ac4cac6cf3a57

