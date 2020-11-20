<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\LogEmpleado;

class LogEmpleadoController extends Controller
{
    //CRUD para LogEmpleado.
    public function index(Request $request)
    {
        return LogEmpleado::all();
    }
    public function store(Request $request)
    {
        return LogEmpleado::create($request->all());
    }
    public function show(LogEmpleado $logEmpleado)
    {
        return LogEmpleado::find($logEmpleado->id);
    }
    public function update(Request $request, LogEmpleado $logEmpleado)
    {
        $logEmpleado->update($request->all());
        return $logEmpleado;
    }
    public function destroy(LogEmpleado $logEmpleado)
    {
        $logEmpleado->destroy($logEmpleado->id);
    }
}
