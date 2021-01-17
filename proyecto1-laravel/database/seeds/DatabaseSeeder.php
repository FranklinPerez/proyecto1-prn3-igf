<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rols')->insert([
            'nombrerol'  => 'ADMIN',
        ]);
        DB::table('rols')->insert([
            'nombrerol'  => 'SUPERVISOR',
        ]);
        DB::table('rols')->insert([
            'nombrerol'  => 'EMPLEADO',
        ]);
        DB::table('rols')->insert([
            'nombrerol'  => 'RRHH',
        ]);

        DB::table('usuarios')->insert([
            'username'  => 'admin',
            'email'     => 'admin@gmail.com',
            'password'  => Crypt::encryptString('admin'),
            'rol_id' => 1,
        ]);

        DB::table('empleados')->insert([
            'codigo'=> '001',
            'nombre'  => 'Franklin',
            'apellidos'     => 'Perez',
            'dui'  => '12345678-0',
            'usuario_id' => 1,
        ]);
    }
}
