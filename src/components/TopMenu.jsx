import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { categories } from "../utils";

const TopMenu = () => {
  // We manage the mobile menu's open/closed state natively in React
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        
        {/* Mobile menu toggle button */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Categories
          </span>
          <button
            onClick={toggleMenu}
            className="rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {/* Lucide icons swap depending on the state */}
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Collapsible content area */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block pb-4 lg:pb-0`}
        >
          <ul className="flex flex-col space-y-1 lg:flex-row lg:space-x-2 lg:space-y-0 lg:py-3">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link
                  className="block rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                  to={`/category/${cat}`}
                  // Close the menu automatically when a link is clicked on mobile
                  onClick={() => setIsOpen(false)} 
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default TopMenu;