import React, { lazy } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Trash2,
  ChevronRight,
  ChevronLeft,
  Truck,
  Plus,
  Minus,
} from "lucide-react";

const CouponApplyForm = lazy(() =>
  import("../components/CouponApplyForm")
);

const onSubmitApplyCouponCode = async (values) => {
  alert(JSON.stringify(values));
};

const addProduct = (shoppingCart, shoppingCartproduct, updateCount) => {
  shoppingCart.addProduct(shoppingCartproduct.product);
  getNewCount(shoppingCart, updateCount);
};

const removeProduct = (shoppingCart, shoppingCartproduct, updateCount) => {
  shoppingCart.removeProduct(shoppingCartproduct.product._id);
  getNewCount(shoppingCart, updateCount);
};

const removeAllProduct = (shoppingCart, shoppingCartproduct, updateCount) => {
  shoppingCart.removeAllProduct(shoppingCartproduct.product._id);
  getNewCount(shoppingCart, updateCount);
};

const getNewCount = (shoppingCart, updateCount) => {
  const total =
    shoppingCart.products.size > 0
      ? Array.from(shoppingCart.products.values())
          .map((product) => product.count)
          .reduce((prev, curr) => prev + curr)
      : 0;

  updateCount(total);
};

const getTotalCost = (shoppingCart) => {
  return shoppingCart.products.size > 0
    ? Array.from(shoppingCart.products.values())
        .map((product) => product.product.price)
        .reduce((prev, curr) => prev + curr)
    : 0;
};

const CheckoutLink = ({ shoppingCart }) => {
  if (shoppingCart.products.size > 0) {
    return (
      <Link
        to="/checkout"
        className="ml-auto flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Make Purchase
        <ChevronRight size={18} />
      </Link>
    );
  }

  return null;
};

const ProductList = ({ shoppingCart, updateCount }) => {
  const products = Array.from(shoppingCart.products.values());

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-left text-xs uppercase text-gray-500">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4 w-32">Quantity</th>
              <th className="p-4 w-40">Price</th>
              <th className="p-4 w-32"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((wrapper) => (
              <tr key={wrapper.product._id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={"../../" + wrapper.product.image}
                      alt=""
                      className="hidden md:block w-20 rounded"
                    />

                    <div>
                      <Link
                        to="/product/detail"
                        className="font-medium hover:underline"
                      >
                        {wrapper.product.name}
                      </Link>

                      <p className="text-sm text-gray-500">
                        {wrapper.product.name}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center border rounded-md w-fit">
                    <button
                      className="p-2 hover:bg-gray-100"
                      onClick={() =>
                        removeProduct(shoppingCart, wrapper, updateCount)
                      }
                    >
                      <Minus size={16} />
                    </button>

                    <input
                      className="w-12 text-center outline-none"
                      defaultValue={wrapper.count}
                    />

                    <button
                      className="p-2 hover:bg-gray-100"
                      onClick={() =>
                        addProduct(shoppingCart, wrapper, updateCount)
                      }
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </td>

                <td className="p-4">
                  <div className="font-semibold">
                    ${(wrapper.product.price * wrapper.count).toFixed(2)}
                  </div>

                  <div className="text-sm text-gray-500">
                    ${wrapper.product.price} each
                  </div>
                </td>

                <td className="p-4 text-right space-x-2">
                  <button className="p-2 border rounded hover:bg-gray-100">
                    <Heart size={18} />
                  </button>

                  <button
                    className="p-2 border rounded text-red-500 hover:bg-red-50"
                    onClick={() =>
                      removeAllProduct(shoppingCart, wrapper, updateCount)
                    }
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4 border-t p-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          <ChevronLeft size={18} />
          Continue shopping
        </Link>

        <CheckoutLink shoppingCart={shoppingCart} />
      </div>
    </div>
  );
};

export default function CartView({ shoppingCart, updateCount }) {
  return (
    <>
      <div className="mb-6 border-t bg-gray-800 p-6 text-white">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-9">
            <ProductList
              shoppingCart={shoppingCart}
              updateCount={updateCount}
            />

            {/* Delivery notice */}
            {/*
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-green-700">
              <Truck size={18} />
              Free Delivery within 1-2 weeks
            </div>
            */}
          </div>

          <div className="md:col-span-3 space-y-4">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <CouponApplyForm onSubmit={onSubmitApplyCouponCode} />
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="space-y-2 border-b pb-4 text-sm">
                <div className="flex justify-between">
                  <span>Total price:</span>
                  <span>${getTotalCost(shoppingCart)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>-$0.00</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Coupon:</span>
                  <span>-$0.00</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 font-semibold text-lg">
                <span>Total:</span>
                <span>${getTotalCost(shoppingCart)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-center">
                <img
                  src="../../images/payment/payments.webp"
                  alt=""
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
