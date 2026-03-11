import { lazy } from "react";
import { Link } from "react-router-dom";
import {
  BookCheck,
  MessageSquareText,
  Newspaper,
  UserSquare,
  Receipt,
  Calculator,
  ShoppingCart,
} from "lucide-react";

const Search = lazy(() => import("../components/Search"));

export default function SupportView() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gray-900 py-12 text-center text-white">
        <h1 className="mb-6 text-3xl font-semibold">
          How can we help you today?
        </h1>

        <div className="mx-auto max-w-2xl px-4">
          <Search />
        </div>
      </div>

      {/* Top Support Cards */}
      <div className="bg-gray-100 py-6">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          <SupportCard
            icon={BookCheck}
            title="Knowledge Base"
            description="40 Articles / 12 Categories"
          />

          <SupportCard
            icon={MessageSquareText}
            title="Forums"
            description="10 Topics / 7 Posts"
          />

          <SupportCard
            icon={Newspaper}
            title="News"
            description="15 Posts / 12 Categories"
          />
        </div>
      </div>

      {/* Support Sections */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-4">
          <SupportList
            icon={UserSquare}
            title="My Account"
          />

          <SupportList
            icon={Receipt}
            title="Charges & Refunds"
          />

          <SupportList
            icon={Calculator}
            title="Accounting & Taxes"
          />

          <SupportList
            icon={ShoppingCart}
            title="Cart"
          />
        </div>
      </div>
    </>
  );
}

function SupportCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
      <Icon className="text-yellow-500" size={36} />

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function SupportList({ icon: Icon, title }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="mb-3 text-center">
        <Icon size={32} className="mx-auto text-blue-500" />
        <div className="mt-2 font-semibold">{title}</div>
      </div>

      <div className="flex flex-col divide-y">
        {[1,2,3,4,5].map((i) => (
          <Link
            key={i}
            to="/"
            className="py-2 text-sm hover:text-blue-600"
          >
            Cras justo odio
          </Link>
        ))}
      </div>
    </div>
  );
}
