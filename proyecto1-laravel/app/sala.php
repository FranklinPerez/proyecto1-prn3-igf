<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sala extends Model
{

    protected $fillable = ['numeroSala', 'asunto', 'tiempoTrabajo', 'tiempo_captura', 'supervisor_id'];
        public function reportes(){
            return $this->hasMany('App\reporte');
        }
        public function supervisor(){
            return $this->hasOne('App\Empleado');
        }
        public function mensajes(){
            return $this->hasMany('App\Panel');
        }
    }

