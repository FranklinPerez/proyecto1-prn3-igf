<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\NotificacionPersonal;
class notificacionPersonalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return NotificacionPersonal::all();
    }

    public function getByUser($id){
        return  NotificacionPersonal::join('empleados','notificacion_personals.adjudicado_id','=','empleados.id')
            ->where('empleados.usuario_id','=',$id)    
            ->orderBy('notificacion_personals.id','ASC')
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
        return NotificacionPersonal::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(NotificacionPersonal $notificacionPersonal)
    {
        return NotificacionPersonal::find($notificacionPersonal->id);
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
    public function update(Request $request, NotificacionPersonal $notificacionPersonal)
    {
        $notificacionPersonal->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(NotificacionPersonal $notificacionPersonal)
    {
        $notificacionPersonal->destroy($notificacionPersonal->id);
    }
}
