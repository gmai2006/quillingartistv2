import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Privacy from "./pages/Privacy";
import data from "./data";

import ReturnPolicy from "./pages/ReturnPolicy";
import TermUse from "./pages/TermUse";
import { ShoppingCart } from "./models/Shoppingcart";

import SearchResult from "./pages/SearchResult";
import { Security } from "./pages/Security";


// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { CheckoutForm } from '@stripe/react-stripe-js';

const HomeView = lazy(() => import("./pages/Home"));

const CartView = lazy(() => import("./pages/Cart"));
const CheckoutView = lazy(() => import("./pages/Checkout"));
const DocumentationView = lazy(() => import("./pages/Documentation"));

const InternalServerErrorView = lazy(() => import("./pages/500"));
const ContactUsView = lazy(() => import("./pages/ContactUs"));
const SupportView = lazy(() => import("./pages/Support"));

const NotFoundView = lazy(() => import("./pages/404"));
const products = data.products;

const App = () => {
  const [count, setCount] = useState(0);
  const [shoppingCart, setShoppingCart] = useState(new ShoppingCart(new Map()));
  const [searchData, setSearchData] = useState([]);

  return (

    <BrowserRouter>
      <Header allproducts={products} count={count} setSearchData={setSearchData} />
      <TopMenu />
      <Suspense
        fallback={
          <div className="text-white text-center mt-3">Loading...</div>
        }
      >
        <Routes>
          <Route path="" element={<ProductList allproducts={products} />} />
          <Route path="product/detail/:id" element={<ProductDetail allproducts={products} shoppingCart={shoppingCart} updateCount={setCount} />} />
          <Route path="category/:cat" element={<ProductList allproducts={products} />} />
          <Route path="cart" element={<CartView shoppingCart={shoppingCart} updateCount={setCount} />} />
          <Route path="checkout" element={<CheckoutView shoppingCart={shoppingCart} count={count} />} />
          <Route path="documentation" element={<DocumentationView />} />
          <Route path="contact-us" element={<ContactUsView />} />
          <Route path="support" element={<SupportView />} />
          <Route path="return" element={<ReturnPolicy />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="term" element={<TermUse />} />
          <Route path="security" element={<Security />} />
          <Route path="500" element={<InternalServerErrorView />} />
          <Route path="searchResult" element={<SearchResult allproducts={products} searchData={searchData} />} />
          <Route element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <Footer allproducts={products} />
    </BrowserRouter>

  );
}

export default App;
