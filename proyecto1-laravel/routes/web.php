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
Route::resource('login', 'LoginController');
Route::get('login/{username}/{password}', 'LoginController@buscarUsuario');
Route::resource('empleados', 'EmpleadoController');
Route::resource('log_empleados','LogEmpleadoController');
<<<<<<< HEAD
=======
Route::resource('roles', 'RolesController');



>>>>>>> 9361ce7123a8177aa801150e33c39eda5353a562

