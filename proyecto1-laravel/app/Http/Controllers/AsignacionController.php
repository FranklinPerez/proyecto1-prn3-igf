<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\asignacion;
class AsignacionController extends Controller
{
    public function index(Request $request)
    {
        $asig = DB::table('empleados')
        ->join('asignacions', 'asignacions.id_empleados_asignado', '=', 'empleados.id')
        ->join('salas', 'asignacions.id_sala_asignada', '=', 'salas.id')
        ->select('empleados.nombreEmpleado', 'empleados.codigoEmpleado', 'empleados.apellidosEmpleado',
                'salas.numeroSala', 'salas.asunto', 'asignacions.id')->orderBy('salas.numeroSala', 'asc')->get();
        return $asig;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return asignacion::create($request->all());
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(asignacion $asignacion)
    {
        return asignacion::find($asignacion->id);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, asignacion $asignacion )
    {
        $asignacion->update($request->all());
        return $asignacion;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Asignacion $asignacion)
    {
        $asignacion->destroy($asignacion->id);
    }
}


