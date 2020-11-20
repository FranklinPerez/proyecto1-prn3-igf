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
<<<<<<< HEAD
Route::resource('log_empleados','LogEmpleadoController');
=======

>>>>>>> 92579bd2956095a5cee3928c90c88c442bdc3b32
