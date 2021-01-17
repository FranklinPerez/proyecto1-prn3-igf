<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use App\LogEmpleado;
use App\Imagen;

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

    public function getImagen($id)
    {
        $imagen = Imagen::join('log_empleados','log_empleados.id','=','imagens.log_empleado_id')
            ->where('log_empleados.id','=',$id)
            ->first();
        if($imagen){
            $fileName = 'public/imagenes/'.$imagen->image;
            $images = \File::get(public_path('imagenes/'.$imagen->image));
            return response($images, 200)
                    ->header('Content-Type', 'image/png');
        }
        return null;
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
