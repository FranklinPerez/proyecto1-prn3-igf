<?php

namespace App\Http\Controllers;
use App\Usuario;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class LoginController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function buscarUsuario($username, $password)
    {
        $match = ['username' => $username,'password' => $password];
        $usuario = Usuario::where($match)->get(['id', 'username', 'email']);
        $var = json_decode($usuario);
        if(count($usuario)>0){
            $Resultado = array("resultado"=>"Inicio de sesion exitoso");
            $response = array_merge($var, $Resultado);
            json_encode($response);

        }else{
            $Resultado = array("resultado"=>"usuario y/o contraseña incorrectos");
            $response = array_merge($var, $Resultado);
            json_encode($response);
        }
        return response()->json($response);
    }
}
