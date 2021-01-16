<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use App\Usuario;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        return  Usuario::join('rols','usuarios.rol_id','=','rols.id')
                ->select('usuarios.id','usuarios.username','usuarios.email','usuarios.rol_id','usuarios.password','rols.nombrerol')
                ->orderBy('usuarios.id','ASC')
                ->get();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // error_log('inside store user ');
        return Usuario::create([
            'username' => $request['username'],
            'email' => $request['email'],
            'rol_id' => $request['rol_id'],
            'password' => Crypt::encryptString($request['password']),
            'rol_id' => $request['rol_id'],
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Usuario $usuario)
    {
        return  Usuario::join('rols','usuarios.rol_id','=','rols.id')
                ->where('usuarios.id','=',$usuario->id)
                ->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Usuario $usuario )
    {
        $password_encriptado = Crypt::encryptString($request['password']);
        $request['password'] = $password_encriptado;
        $usuario->update($request->all());
        return $usuario;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Usuario $usuario)
    {
        $usuario->destroy($usuario->id);
    }
}
