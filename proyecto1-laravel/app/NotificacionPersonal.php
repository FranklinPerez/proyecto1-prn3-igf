<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotificacionPersonal extends Model
{
    protected $fillable = [
        'adjudicado_id',
        'enviado_id',
        'mensaje',
    ];

    public function sesion(){
        return $this->hasOne('App\LOGEmpleado');
    }
    public function empleadoCitado(){
        return $this->hasOne('App\Empleado');
    }
    public function empleadoCitador(){
        return $this->hasOne('App\Empleado');
    }
}
