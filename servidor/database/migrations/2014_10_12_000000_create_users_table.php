<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('users', function (Blueprint $table) {
  			$table->rememberToken();
  			$table->timestamps();
  			$table->timestamp('deleted_at')->nullable();

  		});

      Schema::table('books', function (Blueprint $table) {
  			$table->rememberToken();
  			$table->timestamps();
  			$table->timestamp('deleted_at')->nullable();

  		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
