import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult({ searchData }) {
  if (!searchData || searchData.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {searchData.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <Link to={`/product/detail/${product._id}`}>
            <img
              src={`/${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </Link>

          <div className="p-4">
            <Link to={`/product/detail/${product._id}`}>
              <h2 className="font-semibold text-lg hover:text-blue-600">
                {product.name}
              </h2>
            </Link>

            <div className="text-gray-700 font-medium mt-2">
              ${product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}