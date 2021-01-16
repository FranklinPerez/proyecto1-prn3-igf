<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    protected $fillable = ['image', 'tipo', 'ruta', 'log_empleado_id']; 
    public function sesion(){
        return $this->hasOne('App\LOGEmpleado');
    }
}
