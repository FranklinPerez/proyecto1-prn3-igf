<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $fillable = ['codigo','nombre','apellidos', 'dui','usuario_id'];
    
    public function usuario(){
        return $this->hasOne('App\Usuario');
    }

    public function salaSupervisada(){
        return $this->belongsTo('App\sala');
    }
    public function sesiones(){
        return $this->hasMany('App\LOGEmpleado');
    }
    public function seAdjudicaNotificacion(){
        return $this->hasMany('App\NotificacionPersonal');
        }
    public function laEnviaNotificacion(){
        return $this->hasMany('App\NotificacionPersonal');
        }
    }
