<?php

namespace App\Http\Controllers;
use App\Usuario;
use App\LogEmpleado;
use App\Empleado;
use DB;
use Illuminate\Http\Request;
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
    public function buscarUsuario(Request $request)
    {
        date_default_timezone_set("America/El_Salvador");
        $username = $request['username'];
        $password = $request['password'];
        /* print_r($request['username']);
        print_r($request['password']); */
        $match = ['username' => $username];
        $usuario = Usuario::where($match)->get(['id', 'username', 'email','password']);

        $var = json_decode($usuario);
        if(count($usuario)>0){

                $password_desencriptado = Crypt::decryptString((string)$usuario[0]->password);

            if($password_desencriptado == $password){
                $Resultado = array("resultado"=>"Inicio de sesion exitoso");
                $match = ['id_usuario' => $usuario[0]->id];
                $empleado = Empleado::where($match)
                            ->select('id')->get();
                    foreach ($empleado as $emp) {
                        $a = date("Y-m-d");
                        $a .=" ";
                        $a .= date("h:i:sa");
                         DB::table('log_empleados')->insert(['ubicacionlog'=>'DataBase',
                                                'empleado_id'=>$emp->id,
                                                'accion'=>'inicio de Sesion',
                                                'created_at'=>$a,
                                                'updated_at'=>$a]);

                    }
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

    public function cerrarSesion($id){
        date_default_timezone_set("America/El_Salvador");
        $match = ['id' => $id];
        $usuario = Usuario::where($match)->get(['id']);
        if(count($usuario)>0){
                $match = ['id_usuario' => $usuario[0]->id];
                $empleado = Empleado::where($match)
                            ->select('id')->get();
                    foreach ($empleado as $emp) {
                        $a = date("Y-m-d");
                        $a .=" ";
                        $a .= date("h:i:sa");
                         DB::table('log_empleados')->insert(['ubicacionlog'=>'DataBase',
                                                'empleado_id'=>$emp->id,
                                                'accion'=>'cierre de Sesion',
                                                'created_at'=>$a,
                                                'updated_at'=>$a]);

                    }
}
    }
}
