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
<<<<<<< HEAD

Route::resource('login', 'LoginController');
Route::get('login/{username}/{password}', 'LoginController@buscarUsuario');
=======
Route::resource('empleados', 'EmpleadoController');
>>>>>>> db882db1ad7e2b8b8113004e53c5dd2f51492adc
