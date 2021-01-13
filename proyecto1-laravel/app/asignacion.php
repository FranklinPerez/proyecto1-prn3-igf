<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class asignacion extends Model
{
    public function sala(){
        return $this->hasOne('App\Empleado');
    }
    public function Empleado(){
        return $this->hasOne('App\Sala');
    }
}
