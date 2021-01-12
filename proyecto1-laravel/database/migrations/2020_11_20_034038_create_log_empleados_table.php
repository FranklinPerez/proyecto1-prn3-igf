<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogEmpleadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('log_empleados', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ubicacionlog');//Mismo nombre que en el modelo para las columnas.
            $table->timestamps();
            #$table->unsignedBigInteger('asignacion_id');
            #$table->foreign('asignacion_id')->references('id')->on('asignacions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('log_empleados');
    }
}
