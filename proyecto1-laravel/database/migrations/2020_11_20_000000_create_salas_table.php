<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->integer('numeroSala');
            $table->string('asunto');
            $table->integer('tiempoTrabajo');
            $table->integer('tiempo_captura');
            $table->unsignedBigInteger('supervisor_id')->nullable();
            $table->foreign('supervisor_id')
                    ->references('id')
                    ->on('empleados');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('salas');
    }
}
