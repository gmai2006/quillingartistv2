import React, { lazy, Suspense, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCart, Heart, Minus, Plus, CreditCard } from "lucide-react";
import { shuffleArray } from "../utils";

// Lazy Loaded Components
const CardFeaturedProduct = lazy(() => import("../components/CardFeaturedProduct"));
const Details = lazy(() => import("../components/Details"));
// const QuestionAnswer = lazy(() => import("../components/others/QuestionAnswer"));
const ShippingReturns = lazy(() => import("../components/ShippingReturns"));

// Cart helper functions
const addProduct = (shoppingCart, product, updateCount) => {
  shoppingCart.addProduct(product);
  getNewCount(shoppingCart, updateCount);
};

const removeProduct = (shoppingCart, product, updateCount) => {
  shoppingCart.removeProduct(product._id);
  getNewCount(shoppingCart, updateCount);
};

const getNewCount = (shoppingCart, updateCount) => {
  const total =
    shoppingCart.products.size > 0
      ? Array.from(shoppingCart.products.values())
          .map((product) => product.count)
          .reduce((prev, curr) => prev + curr, 0)
      : 0;
  updateCount(total);
};

export default function ProductDetail({ allproducts, shoppingCart, updateCount }) {
  const params = useParams();
  const navigation = useNavigate();
  
  // Replaces Bootstrap's JS tab functionality
  const [activeTab, setActiveTab] = useState("details");

  const update = (shoppingCart, product, updateCount) => {
    addProduct(shoppingCart, product, updateCount);
    navigation(`/checkout/`);
  };

  // Find the product. Using strict equality (===) by coercing params.id if necessary
  const filtered = allproducts?.find((item) => String(item._id) === String(params.id));

  // Fallback if product isn't found
  if (!filtered) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-xl text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        
        {/* Main Content Area (Left side on desktop) */}
        <div className="w-full lg:w-2/3">
          
          {/* Product Header / Info */}
          <div className="mb-10 flex flex-col gap-8 md:flex-row">
            
            {/* Image */}
            <div className="flex w-full items-center justify-center md:w-5/12">
              <img
                src={`/${filtered.image}`}
                className="max-h-[400px] w-full rounded-lg object-contain"
                alt={filtered.name}
              />
            </div>

            {/* Details & Actions */}
            <div className="w-full md:w-7/12">
              <h1 className="mb-4 text-2xl font-bold text-gray-800">
                {filtered.name}
              </h1>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${Number(filtered.price).toFixed(2)}
                </span>
              </div>

              {/* Controls Group */}
              <div className="mb-8 flex flex-wrap items-center gap-4">
                
                {/* Quantity Adjuster */}
                <div className="flex items-center overflow-hidden rounded-md border border-gray-300 bg-white">
                  <button
                    className="flex h-10 w-10 items-center justify-center bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                    type="button"
                    onClick={() => removeProduct(shoppingCart, filtered, updateCount)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    className="h-10 w-12 border-x border-gray-300 text-center outline-none"
                    defaultValue="1"
                    readOnly // Since you rely on buttons, making this readOnly prevents desync issues
                  />
                  <button
                    className="flex h-10 w-10 items-center justify-center bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                    type="button"
                    onClick={() => addProduct(shoppingCart, filtered, updateCount)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 shadow-sm"
                  onClick={() => addProduct(shoppingCart, filtered, updateCount)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to cart
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-yellow-600 shadow-sm"
                  onClick={() => update(shoppingCart, filtered, updateCount)}
                >
                  {/* Swapped to CreditCard to differentiate from Add to Cart */}
                  <CreditCard className="h-5 w-5" />
                  Buy now
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center rounded-md border border-gray-300 bg-white p-2.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-red-500"
                  title="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Highlights */}
              <div className="rounded-lg bg-gray-50 p-4 border border-gray-100">
                <p className="mb-2 font-semibold text-gray-800">
                  Product Highlights
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li>Handmade</li>
                  <li>Material: paper, glue</li>
                  <li>{filtered.description}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8">
            {/* Tab Nav */}
            <div className="flex border-b border-gray-200">
              <button
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "details"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "shipping"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("shipping")}
              >
                Shipping & Returns
              </button>
            </div>

            {/* Tab Content */}
            <div className="py-6 text-sm text-gray-600">
              <Suspense fallback={<div className="animate-pulse h-20 bg-gray-100 rounded"></div>}>
                {activeTab === "details" && <Details />}
                {activeTab === "shipping" && <ShippingReturns />}
              </Suspense>
            </div>
          </div>
        </div>

        {/* Sidebar (Right side on desktop) */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-6">
            <h3 className="mb-4 text-lg font-bold text-gray-800 border-b pb-2">Featured Products</h3>
            <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded"></div>}>
              <CardFeaturedProduct
                data={shuffleArray(allproducts?.filter((item, index) => index < 6) || [])}
              />
            </Suspense>
          </div>
        </div>

      </div>
    </div>
  );
}