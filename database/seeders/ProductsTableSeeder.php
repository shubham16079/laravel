<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            // Products for Electronics category
            [
                'name' => 'iPhone 13',
                'description' => 'Latest Apple smartphone with A15 Bionic chip.',
                'price' => 999.99,
                'subcategory_id' => 1, // Smartphones
                'image' => 'iphone13.jpg',
                'stock' => 50,
            ],
            [
                'name' => 'Samsung Galaxy S21',
                'description' => 'Powerful smartphone with a stunning camera.',
                'price' => 799.99,
                'subcategory_id' => 1, // Smartphones
                'image' => 'samsung_galaxy_s21.jpg',
                'stock' => 40,
            ],
            [
                'name' => 'Dell XPS 13',
                'description' => 'Ultrabook with stunning display and performance.',
                'price' => 1299.99,
                'subcategory_id' => 2, // Laptops
                'image' => 'dell_xps_13.jpg',
                'stock' => 25,
            ],
            [
                'name' => 'HP Spectre x360',
                'description' => 'Premium convertible laptop with sleek design.',
                'price' => 1399.99,
                'subcategory_id' => 2, // Laptops
                'image' => 'hp_spectre_x360.jpg',
                'stock' => 30,
            ],
            [
                'name' => 'Sony WH-1000XM4',
                'description' => 'Noise-canceling over-ear headphones.',
                'price' => 349.99,
                'subcategory_id' => 1, // Headphones
                'image' => 'sony_wh1000xm4.jpg',
                'stock' => 20,
            ],

            // Products for Fashion category
            [
                'name' => 'Men\'s T-Shirt',
                'description' => 'Comfortable cotton t-shirt.',
                'price' => 19.99,
                'subcategory_id' => 3, // Men’s Clothing
                'image' => 'mens_tshirt.jpg',
                'stock' => 100,
            ],
            [
                'name' => 'Men\'s Jeans',
                'description' => 'Stylish blue jeans for men.',
                'price' => 39.99,
                'subcategory_id' => 3, // Men’s Clothing
                'image' => 'mens_jeans.jpg',
                'stock' => 80,
            ],
            [
                'name' => 'Women\'s Dress',
                'description' => 'Stylish summer dress.',
                'price' => 49.99,
                'subcategory_id' => 4, // Women’s Clothing
                'image' => 'womens_dress.jpg',
                'stock' => 70,
            ],
            [
                'name' => 'Women\'s Handbag',
                'description' => 'Elegant handbag for everyday use.',
                'price' => 89.99,
                'subcategory_id' => 4, // Women’s Clothing
                'image' => 'womens_handbag.jpg',
                'stock' => 50,
            ],
            [
                'name' => 'Men\'s Sneakers',
                'description' => 'Comfortable sneakers for daily wear.',
                'price' => 59.99,
                'subcategory_id' => 3, // Men’s Clothing
                'image' => 'mens_sneakers.jpg',
                'stock' => 90,
            ],

            // Products for Home Appliances category
            [
                'name' => 'LG Washing Machine',
                'description' => 'High-efficiency washing machine.',
                'price' => 499.99,
                'subcategory_id' => 6, // Washing Machines
                'image' => 'lg_washing_machine.jpg',
                'stock' => 20,
            ],
            [
                'name' => 'Samsung Refrigerator',
                'description' => 'Spacious and energy-efficient refrigerator.',
                'price' => 799.99,
                'subcategory_id' => 5, // Kitchen Appliances
                'image' => 'samsung_refrigerator.jpg',
                'stock' => 15,
            ],
            [
                'name' => 'Dyson Vacuum Cleaner',
                'description' => 'Powerful vacuum cleaner for deep cleaning.',
                'price' => 399.99,
                'subcategory_id' => 5, // Kitchen Appliances
                'image' => 'dyson_vacuum.jpg',
                'stock' => 10,
            ],
            [
                'name' => 'Philips Air Fryer',
                'description' => 'Healthy air fryer for delicious meals.',
                'price' => 199.99,
                'subcategory_id' => 5, // Kitchen Appliances
                'image' => 'philips_air_fryer.jpg',
                'stock' => 25,
            ],
            [
                'name' => 'Sony 4K TV',
                'description' => 'Stunning 4K HDR TV for home entertainment.',
                'price' => 999.99,
                'subcategory_id' => 6, // Televisions
                'image' => 'sony_4k_tv.jpg',
                'stock' => 15,
            ],

            // Products for Books category
            [
                'name' => 'Cooking 101',
                'description' => 'A beginner\'s guide to cooking.',
                'price' => 29.99,
                'subcategory_id' => 7, // Fiction
                'image' => 'cooking_101.jpg',
                'stock' => 150,
            ],
            [
                'name' => 'Learning Laravel',
                'description' => 'Comprehensive guide to Laravel framework.',
                'price' => 39.99,
                'subcategory_id' => 8, // Non-Fiction
                'image' => 'learning_laravel.jpg',
                'stock' => 100,
            ],
            [
                'name' => 'The Great Gatsby',
                'description' => 'Classic novel by F. Scott Fitzgerald.',
                'price' => 10.99,
                'subcategory_id' => 7, // Fiction
                'image' => 'great_gatsby.jpg',
                'stock' => 200,
            ],
            [
                'name' => 'Sapiens: A Brief History of Humankind',
                'description' => 'Exploration of human history.',
                'price' => 24.99,
                'subcategory_id' => 8, // Non-Fiction
                'image' => 'sapiens.jpg',
                'stock' => 80,
            ],
            [
                'name' => 'To Kill a Mockingbird',
                'description' => 'Classic novel by Harper Lee.',
                'price' => 15.99,
                'subcategory_id' => 7, // Fiction
                'image' => 'to_kill_a_mockingbird.jpg',
                'stock' => 150,
            ],
        ]);
    }
}
