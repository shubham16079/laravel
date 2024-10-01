<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class CategoryProductController extends Controller
{
    public function index()
    {
        // Fetch categories with their related products
        $categories = Category::with('products')->get();
        // Return the categories as a JSON response
        return response()->json([
            'categories' => $categories,
        ]);
    }
    public function show($category, $product_id)
    {
        // Fetch product by its ID
        $product = Product::where('id', $product_id)->with('category')->firstOrFail();
        return Inertia::render('ProductPage', [
            'product' => $product,
        ]);
    }
}
