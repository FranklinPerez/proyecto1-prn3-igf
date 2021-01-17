<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\sala;
class salaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $idUser = $request['usuario_id'];
        if($idUser){
            return sala::join('asignacions','salas.id','=','asignacions.id_sala_asignada')
            ->join('empleados','asignacions.id_empleados_asignado','=','empleados.id')
            ->where('empleados.usuario_id','=',$idUser)
            ->select('salas.id','salas.numeroSala', 'salas.asunto', 'salas.tiempoTrabajo', 'salas.tiempo_captura', 'salas.supervisor_id','salas.created_at')
            ->orderBy('salas.id','ASC')
            ->get();
        }
        return sala::orderBy('salas.id','ASC')
                    ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return sala::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(sala $sala)
    {
        return sala::find($sala->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sala $sala)
    {
        $sala->update($request->all());
        return $sala;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(sala $sala)
    {
        $sala->destroy($sala->id);
    }
}
