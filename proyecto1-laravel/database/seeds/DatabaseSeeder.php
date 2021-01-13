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
        DB::table('usuarios')->insert([
            'username'  => 'admin',
            'email'     => 'admin@gmail.com',
            'password'  => Crypt::encryptString('admin'),
        ]);
    }
}
