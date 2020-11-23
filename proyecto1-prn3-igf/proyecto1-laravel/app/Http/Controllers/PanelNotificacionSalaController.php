<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PanelNotificacionSala;

class PanelNotificacionSalaController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        return PanelNotificacionSala::all();
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return PanelNotificacionSala::create($request->all());
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(PanelNotificacionSala $panelnotificacionsala)
    {
        return PanelNotificacionSala::find($panelnotificacionsala->id);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PanelNotificacionSala $panel )
    {
        $panel->update($request->all());
        return $panel;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PanelNotificacionSala $panel)
    {
        $panel->destroy($panel->id);
    }
}
