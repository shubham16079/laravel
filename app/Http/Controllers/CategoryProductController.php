<?php

namespace App\Http\Controllers;

use App\Models\Category;

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
}
