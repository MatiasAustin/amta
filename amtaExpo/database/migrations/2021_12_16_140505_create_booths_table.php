<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoothsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booths', function (Blueprint $table) {
            $table->id();
            // Booth Fill
            $table->string('booth_number');
            $table->string('tooltip_logo');
            $table->string('company_logo');
            $table->string('company_name');
            $table->string('brand_list');
            $table->string('contact');
            $table->text('description');

            // Exhibitor Fill
            $table->string('video_url');
            $table->string('catalog_url');
            $table->string('contact_url');
            $table->string('product_url');
            $table->string('info_url');

            // Event Fill
            $table->string('event_name')->nullable();
            $table->text('event_desc')->nullable();
            $table->string('event_schedule')->nullable();
            $table->string('event_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booths');
    }
}
