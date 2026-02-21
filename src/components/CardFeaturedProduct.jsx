import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

// Destructuring 'data' directly from props and assigning it to 'products' with a default empty array
const CardFeaturedProduct = ({ data: products = [] }) => {
  
  // Failsafe in case there are no featured products to show
  if (products.length === 0) return null;

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      
      {/* Card Header */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-700">
        Featured Products
      </div>

      {/* Card Body */}
      <div className="flex flex-col p-4">
        {products.map((product, idx) => (
          <div
            key={product._id || idx}
            className={`flex items-center gap-4 ${
              idx + 1 === products.length ? "" : "mb-4 border-b border-gray-100 pb-4"
            }`}
          >
            
            {/* Image Container (w-1/3 roughly equals Bootstrap's col-md-4) */}
            <div className="w-1/3 shrink-0">
              <Link to={`/product/detail/${product._id}`}>
                <img
                  src={`/${product.image}`}
                  className="h-20 w-full rounded-md object-cover transition-opacity hover:opacity-80"
                  alt={product.name}
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Product Details (flex-1 takes the remaining space, like col-md-8) */}
            <div className="flex-1">
              <h6 className="mb-1 text-sm font-medium capitalize leading-tight">
                <Link
                  to={`/product/detail/${product._id}`}
                  className="text-gray-800 transition-colors hover:text-blue-600"
                >
                  {product.name}
                </Link>
              </h6>

              {/* Restored Star Rating using Lucide */}
              <div className="mb-1 flex items-center">
                {/* Fallback to 5 stars if product.star is undefined */}
                {Array.from({ length: product.star || 5 }, (_, key) => (
                  <Star
                    key={key}
                    className="mr-0.5 h-3 w-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Pricing Section */}
              <div className="flex items-baseline">
                <span className="text-base font-bold text-gray-900">
                  ${Number(product.price).toFixed(2)}
                </span>
                
                {/* Restored Original Price with strikethrough */}
                {product.originPrice > 0 && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    ${Number(product.originPrice).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFeaturedProduct;