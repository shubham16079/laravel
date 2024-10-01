import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryProductsPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch categories and products on component mount
    useEffect(() => {
        axios.post('/')
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

            <div className="space-y-6">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col">
                        {/* Category name */}
                        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                        <div className="flex flex-wrap gap-4">
                            {category.products.length > 0 ? (
                                category.products.map((product) => (
                                    <div key={product.id} className="w-1/5 bg-white rounded-lg shadow p-4">
                                        <img
                                            src={`/images/${product.image}`}
                                            alt={product.name}
                                            className="w-full h-32 object-cover rounded-md mb-2"
                                        />
                                        <h3 className="text-lg font-medium">{product.name}</h3>
                                        <p className="text-gray-600">{product.description}</p>
                                        <p className="text-lg font-bold">${product.price}</p>
                                        <a href={`/products/${product.id}`} className="text-blue-500 hover:underline">
                                            View Details
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No products available in this category.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProductsPage;
