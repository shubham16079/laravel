import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryProductsPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch categories and products on component mount
    useEffect(() => {
        axios.post('/categories/products')
            .then(response => {
                setCategories(response.data.categories);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products by Category</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div key={category.id} className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-xl font-semibold">{category.name}</h2>
                        <div className="mt-2">
                            {category.products.length > 0 ? (
                                category.products.map((product) => (
                                    <div key={product.id} className="border-b py-2">
                                        <img
                                            src={`/images/${product.image}`}
                                            alt={product.name}
                                            className="w-full h-32 object-cover rounded-md"
                                        />
                                        <h3 className="text-lg font-medium">{product.name}</h3>
                                        <p>{product.description}</p>
                                        <p className="text-lg font-bold">${product.price}</p>
                                        <a href={`/products/${product.id}`} className="text-blue-500 hover:underline">
                                            View Details
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p>No products available in this category.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProductsPage;
