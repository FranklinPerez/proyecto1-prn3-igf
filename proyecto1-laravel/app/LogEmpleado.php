<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LogEmpleado extends Model
{
    /*Atributos de la clase.*/
    protected $fillable = ['ubicacionlog'];
    /*Como es un modelo se debe poner el mismo que a la columna que guardará 
    su valor en la base de datos que se crea al hacer la migración, solo se modifica ahí.*/
}
