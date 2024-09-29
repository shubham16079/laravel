import React, { useState } from 'react';

function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Electronics',
      subcategories: ['Mobiles', 'Laptops', 'Cameras', 'Accessories'],
    },
    {
      name: 'Fashion',
      subcategories: ['Men', 'Women', 'Kids', 'Footwear'],
    },
    {
      name: 'Home',
      subcategories: ['Furniture', 'Kitchen', 'Decor', 'Bedding'],
    },
    {
      name: 'Appliances',
      subcategories: ['Televisions', 'Refrigerators', 'Washing Machines', 'Air Conditioners'],
    },
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="text-gray-700 font-semibold px-4 py-2 hover:text-blue-600 transition duration-300">
                {category.name}
              </div>
              {/* Subcategory Dropdown */}
              {activeCategory === index && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-10">
                  {category.subcategories.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition duration-300"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryNav;
