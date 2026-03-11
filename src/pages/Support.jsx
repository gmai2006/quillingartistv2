import React, { lazy } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  MessageSquare,
  Newspaper,
  User,
  Receipt,
  Calculator,
  ShoppingCart,
} from "lucide-react";

const Search = lazy(() => import("../components/Search"));

export default function SupportView() {
  return (
    <div>

      {/* HERO */}
      <div className="bg-gray-900 text-white py-12 text-center">
        <h1 className="text-3xl font-semibold mb-6">
          How can we help you today?
        </h1>

        <div className="max-w-2xl mx-auto px-4">
          <Search />
        </div>
      </div>

      {/* TOP SUPPORT CARDS */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Knowledge Base</h3>
              <p className="text-sm text-gray-500">
                40 Articles / 12 Categories
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <MessageSquare className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="font-semibold">Forums</h3>
              <p className="text-sm text-gray-500">
                10 Topics / 7 Posts
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <Newspaper className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="font-semibold">News</h3>
              <p className="text-sm text-gray-500">
                15 Posts / 12 Categories
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* SUPPORT CATEGORIES */}
      <div className="max-w-6xl mx-auto py-10 grid md:grid-cols-4 gap-6 px-4">

        {/* ACCOUNT */}
        <SupportCard
          icon={<User className="w-7 h-7 text-blue-500" />}
          title="My Account"
        />

        {/* REFUNDS */}
        <SupportCard
          icon={<Receipt className="w-7 h-7 text-yellow-500" />}
          title="Charges & Refunds"
        />

        {/* ACCOUNTING */}
        <SupportCard
          icon={<Calculator className="w-7 h-7 text-red-500" />}
          title="Accounting & Taxes"
        />

        {/* CART */}
        <SupportCard
          icon={<ShoppingCart className="w-7 h-7 text-green-500" />}
          title="Cart"
        />

      </div>

    </div>
  );
}

function SupportCard({ icon, title }) {
  return (
    <div className="border rounded-lg overflow-hidden">

      <div className="text-center py-6 border-b">
        <div className="flex justify-center mb-2">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>

      <div className="flex flex-col">
        <Link to="/" className="px-4 py-2 hover:bg-gray-50 text-sm">
          Cras justo odio
        </Link>
        <Link to="/" className="px-4 py-2 hover:bg-gray-50 text-sm">
          Dapibus ac facilisis in
        </Link>
        <Link to="/" className="px-4 py-2 hover:bg-gray-50 text-sm">
          Morbi leo risus
        </Link>
        <Link to="/" className="px-4 py-2 hover:bg-gray-50 text-sm">
          Porta ac consectetur ac
        </Link>
        <Link to="/" className="px-4 py-2 hover:bg-gray-50 text-sm">
          Vestibulum at eros
        </Link>
      </div>

    </div>
  );
}