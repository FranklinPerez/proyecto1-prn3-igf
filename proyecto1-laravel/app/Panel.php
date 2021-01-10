<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Panel extends Model
{
    #debería llamarse notificación como en el documento, pero se entiende que es esta
    protected $fillable = ['mensaje'];
    public function notificaciones(){
        return $this->hasOne('App\sala');
    }
}
