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
}
