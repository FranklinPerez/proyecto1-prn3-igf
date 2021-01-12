<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = ['username','email' , 'password'];

    public function setPassword($value)
    {
        $this->attributes['password'] = $value;
    }
    public function empleado(){
        return $this->belongs('Apps\Empleado');
    }
    public function rol(){
        return $this->hasOne('App\Rol');
    }
}
