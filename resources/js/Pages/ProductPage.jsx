import React from 'react';

const ProductPage = ({ product }) => {
    if (!product) {
        return <p>Product not found!</p>;
    }

    // Handle Add to Cart
    const handleAddToCart = () => {
        console.log('Added to cart:', product.id);
        // You can implement your cart logic here
    };

    // Handle Buy Now
    const handleBuyNow = () => {
        console.log('Buy now:', product.id);
        // Redirect or perform buy logic
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow p-4">
                <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                />
                <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>

                <div className="flex space-x-4 mt-4">
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
