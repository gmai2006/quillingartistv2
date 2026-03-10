import React, { useState } from "react";
import { CreditCard, ShoppingCart } from "lucide-react";

export default function CheckoutView({ shoppingCart }) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const products = Array.from(shoppingCart.products.values());

  const count =
    products.length > 0
      ? products.map((wrapper) => wrapper.count).reduce((a, b) => a + b)
      : 0;

  const totalCost =
    products.length > 0
      ? products
          .map((wrapper) => wrapper.product.price * wrapper.count)
          .reduce((a, b) => a + b)
      : 0;

  return (
    <>
      {/* Header */}
      <div className="mb-6 border-t bg-gray-800 p-6 text-white">
        <h1 className="text-2xl font-semibold">Checkout</h1>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-12">

          {/* Payment Section */}
          <div className="md:col-span-8">
            {/* Payment card intentionally left commented like original */}
          </div>

          {/* Cart Summary */}
          <div className="md:col-span-4">
            <div className="rounded-xl border bg-white shadow-sm">

              {/* Header */}
              <div className="flex items-center justify-between border-b p-4 font-medium">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Cart
                </div>

                <span className="rounded-full bg-gray-200 px-2 py-1 text-sm">
                  {count}
                </span>
              </div>

              {/* Cart Items */}
              <ul className="divide-y">
                {products.map((wrapper) => (
                  <li
                    key={wrapper.product._id}
                    className="flex justify-between p-4 text-sm"
                  >
                    <div>
                      <h6 className="font-medium">
                        {wrapper.product.name}
                      </h6>
                      <p className="text-gray-500 text-xs">
                        {wrapper.product.name}
                      </p>
                    </div>

                    <span className="text-gray-600">
                      ${wrapper.product.price}
                    </span>
                  </li>
                ))}

                {/* Promo */}
                <li className="flex justify-between bg-gray-50 p-4 text-sm">
                  <div className="text-green-600">
                    <p className="font-medium">Promo code</p>
                  </div>

                  <span className="text-green-600">-$0.00</span>
                </li>

                {/* Total */}
                <li className="flex justify-between p-4 font-semibold">
                  <span>Total (USD)</span>
                  <span>${totalCost}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
