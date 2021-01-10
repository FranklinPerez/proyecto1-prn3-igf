<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class imagen extends Model
{
    public function sesion(){
        return $this->hasOne('App\LOGEmpleado');
    }
}
