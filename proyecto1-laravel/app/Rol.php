<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $fillable = ['nombrerol'];
    public function usuarios(){
        return $this->hasMany('App\Usuario');
    }
}
