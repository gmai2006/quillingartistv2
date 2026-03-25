import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { shuffleArray, categories } from "../utils";

// Removed unused `allproducts` and `match` props to clean up the component signature
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Switched to CSS Grid for reliable column layouts */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Column 1: About */}
          <div>
            <h6 className="text-lg font-semibold text-white">Quilling Artist</h6>
            <hr className="my-4 border-gray-700" />
            <p className="text-sm leading-relaxed">
              Quilling is the art of rolled, shaped, and glued paper that results in creating a unified, decorative design. The name quilling is thought to come from the origin of the art; birds' feathers, or quills, were used to coil the strips of paper around.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h6 className="text-lg font-semibold text-white">Products</h6>
            <hr className="my-4 border-gray-700" />
            <ul className="space-y-3">
              {shuffleArray(categories.filter((cat, i) => i < 6))
                .sort()
                .map((cat, i) => (
                  <li key={i} className="border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                    <Link
                      to={`/category/${cat}`}
                      className="block transition-colors hover:text-white"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 3: Policy */}
          <div>
            <h6 className="text-lg font-semibold text-white">Policy</h6>
            <hr className="my-4 border-gray-700" />
            <ul className="space-y-3">
              {/* <li className="border-b border-gray-800 pb-2">
                <Link to="/return" className="block transition-colors hover:text-white">
                  Return Policy
                </Link>
              </li> */}
              {/* <li className="border-b border-gray-800 pb-2">
                <Link to="/term" className="block transition-colors hover:text-white">
                  Terms Of Use
                </Link>
              </li> */}
              <li className="border-b border-gray-800 pb-2">
                <Link to="/security" className="block transition-colors hover:text-white">
                  Security
                </Link>
              </li>
              <li className="border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                <Link to="/privacy" className="block transition-colors hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div>
            <h6 className="text-lg font-semibold text-white">Customer Care</h6>
            <hr className="my-4 border-gray-700" />
            <div className="flex flex-col space-y-4">
              {/* <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>+1800 100 1000</span>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>support@quillingartist.com</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;