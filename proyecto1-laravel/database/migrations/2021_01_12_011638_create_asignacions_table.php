<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAsignacionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            /*
            $table->unsignedBigInteger('id_empleados');
            $table->foreign('id_empleados')
                    ->reference('id')
                    ->on('emplpeados');
                    /*
            $table->unsignedBigInteger('id_sala');
            $table->foreign('id_sala')
                    ->reference('id')
                    ->on('salas');
                    */
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('asignacions');
    }
}
