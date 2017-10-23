<?php

use Illuminate\Database\Seeder;

class poblacionbd extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert([
  		  'email' => 'user1@user1.com',
  		  'password' =>'user1',
  		]);


      DB::table('users')->insert([
  		  'email' => 'user2@user2.com',
  		  'password' =>'user2',
  		]);

      DB::table('books')->insert([
  		  'name' => 'Book 1',
  		  'year' =>'2000',
          'author' => 'user1',
          'users_id' => 1,
  		]);

      DB::table('books')->insert([
  		  'name' => 'Book 2',
  		  'year' =>'2001',
          'author' => 'user2',
          'users_id' => 2,
  		]);

    }
}
