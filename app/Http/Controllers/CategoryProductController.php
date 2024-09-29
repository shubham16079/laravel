<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CategoryProductController extends Controller
{
    public function index(): \Inertia\Response
    {
        $categories = Category::with('products')->get(); // Assuming a relationship is defined in the Category model
        return Inertia::render('Landing', [
            'categories' => $categories,
        ]);
    }
}
