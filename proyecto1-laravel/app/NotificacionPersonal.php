<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotificacionPersonal extends Model
{
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
