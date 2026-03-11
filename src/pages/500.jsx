import React, { lazy } from "react";
import { Bug } from "lucide-react";

const Search = lazy(() => import("../components/Search"));

export default function InternalServerErrorView() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">

      <div className="flex items-center gap-4 text-yellow-500 mb-4">
        <Bug className="w-16 h-16" />
        <span className="text-6xl font-bold">500</span>
      </div>

      <h1 className="text-2xl font-semibold mb-6">
        Internal Server Error
      </h1>

      <div className="w-full max-w-md">
        <Search />
      </div>

    </div>
  );
}