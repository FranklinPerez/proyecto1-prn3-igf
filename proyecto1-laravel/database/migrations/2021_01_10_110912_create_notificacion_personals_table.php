<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificacionPersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notificacion_personals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('mensaje');
            $table->unsignedBigInteger('adjudicado_id');
            $table->foreign('adjudicado_id')->references('id')->on('empleados');
            $table->unsignedBigInteger('enviado_id');
            $table->foreign('enviado_id')->references('id')->on('empleados');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notificacion_personals');
    }
}
