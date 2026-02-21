import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ShoppingCart } from "lucide-react";

// Simplified logic: The badge is now a clean Tailwind utility sandwich
const ShoppingCartIcon = ({ count }) => {
  if (count <= 0) return null;
  
  return (
    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
      {count}
    </span>
  );
};

const Header = ({ allproducts, count, setSearchData }) => {
  return (
    <header className="border-b bg-gray-50 p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          
          {/* Logo Section */}
          <div className="flex shrink-0 items-center justify-center md:w-1/4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:opacity-80">
              <img
                alt="logo"
                src="/favicon-32x32.png"
                className="h-8 w-8"
              /> 
              <span>Quilling Art</span>
            </Link>
          </div>

          {/* Search Section */}
          <div className="w-full md:w-1/2">
            <Search allproducts={allproducts} setSearchData={setSearchData} />
          </div>

          {/* Cart Section */}
          <div className="flex justify-center md:w-1/4 md:justify-end">
            <div className="relative">
              <Link 
                to="/cart" 
                className="inline-flex items-center rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700 shadow-sm"
              >
                <ShoppingCart className="h-6 w-6" />
                <ShoppingCartIcon count={count} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;