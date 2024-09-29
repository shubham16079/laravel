<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Product name
            $table->text('description'); // Product description
            $table->decimal('price', 10, 2); // Product price
            $table->foreignId('subcategory_id')->constrained()->onDelete('cascade'); // Foreign key reference to subcategories
            $table->foreignId('category_id')->constrained()->onDelete('cascade'); // Foreign key reference to categories
            $table->string('image')->nullable(); // Product image
            $table->integer('stock')->default(0); // Stock quantity
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
