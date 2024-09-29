<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class SubcategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('subcategories')->insert([
            ['name' => 'Smartphones', 'slug' => 'smartphones', 'category_id' => 1],
            ['name' => 'Laptops', 'slug' => 'laptops', 'category_id' => 1],
            ['name' => 'Men\'s Clothing', 'slug' => 'mens-clothing', 'category_id' => 2],
            ['name' => 'Women\'s Clothing', 'slug' => 'womens-clothing', 'category_id' => 2],
            ['name' => 'Kitchen Appliances', 'slug' => 'kitchen-appliances', 'category_id' => 3],
            ['name' => 'Washing Machines', 'slug' => 'washing-machines', 'category_id' => 3],
            ['name' => 'Fiction', 'slug' => 'fiction', 'category_id' => 4],
            ['name' => 'Non-Fiction', 'slug' => 'non-fiction', 'category_id' => 4],
        ]);
    }
}
