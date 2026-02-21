import React from "react";
import { Link, useParams } from "react-router-dom";
import { Star } from "lucide-react";

// Removed the unused 'match' prop
export default function ProductList({ allproducts }) {
  const params = useParams();
  const cat = params.cat || "Animal";
  const products = allproducts ? allproducts.filter((item) => item.category === cat) : [];

  // Added a fallback UI in case a category is empty or products are still loading
  if (products.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-gray-500">
        <p className="text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* CSS Grid creates a highly responsive, evenly spaced product layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Image Container with a subtle hover zoom effect */}
            <Link to={`/product/detail/${product._id}`} className="overflow-hidden">
              <img
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={`/${product.image}`}
                alt={product.name}
                loading="lazy"
              />
            </Link>

            {/* Card Body */}
            <div className="flex flex-1 flex-col p-5">
              <Link 
                to={`/product/detail/${product._id}`} 
                className="transition-colors hover:text-blue-600"
              >
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </h2>
              </Link>
              
              {/* Star Rating utilizing Lucide-React */}
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{product.numReviews || 0} Reviews</span>
              </div>

              {/* mt-auto ensures the price is always pushed to the bottom of the card */}
              <div className="mt-auto pt-4 text-xl font-bold text-gray-900">
                ${Number(product.price).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}