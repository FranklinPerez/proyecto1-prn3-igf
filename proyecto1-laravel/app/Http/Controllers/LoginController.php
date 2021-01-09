<?php

namespace App\Http\Controllers;
use App\Usuario;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;

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
        $userTemp = Usuario::create([
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Crypt::encryptString('admin'),
        ]);
        

        $match = ['username' => $username];
        $usuario = Usuario::where($match)->get(['id', 'username', 'email','password']);
        $var = json_decode($usuario);
        if(count($usuario)>0){

                $password_desencriptado = Crypt::decryptString($usuario[0]->password);

            if($password_desencriptado == $password){
                $Resultado = array("resultado"=>"Inicio de sesion exitoso");
                $response = array_merge($var, $Resultado);
                json_encode($response);
            }
        }else{
            $Resultado = array("resultado"=>"usuario y/o contraseña incorrectos");
            $response = array_merge($var, $Resultado);
            json_encode($response);
        }
        return response()->json($response);
    }
}
