<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class asignacion extends Model
{
    protected $fillable=['id_empleados_asignado', 'id_sala_asignada'];
    public function sala(){
        return $this->hasOne('App\Empleado');
    }
    public function Empleado(){
        return $this->hasOne('App\Sala');
    }
}
