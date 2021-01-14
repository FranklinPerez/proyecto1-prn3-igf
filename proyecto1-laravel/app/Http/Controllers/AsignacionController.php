<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\asignacion;
class AsignacionController extends Controller
{
    public function index(Request $request)
    {
        return asignacion::all();
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


