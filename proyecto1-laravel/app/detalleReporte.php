<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class detalleReporte extends Model
{
    public function reporte(){
        return $this->hasOne('App\reporte');
    }
}
