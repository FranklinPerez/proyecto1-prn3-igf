<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class reporte extends Model
{
    public function salas(){
        return $this->hasOne('App\sala');
    }
    public function detallesReporte(){
        return $this->hasMany('App\detalleReporte');
    }
}
