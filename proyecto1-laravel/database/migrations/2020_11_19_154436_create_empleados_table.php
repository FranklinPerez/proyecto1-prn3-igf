<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateEmpleadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('codigo');#no lo veo necesario porque se tiene el id, a menos que se considere que estará formado por una parte del área al que pertenece y su id
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('dui');
            $table->timestamps();
            $table->unsignedBigInteger('usuario_id')->unique();;
            $table->foreign('usuario_id')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empleados');
    }
}
