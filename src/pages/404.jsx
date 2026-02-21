import React, { lazy, Suspense } from "react";
import { AlertTriangle } from "lucide-react";

const Search = lazy(() => import("../components/Search"));

export default function NotFoundView() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
      
      {/* 404 Heading with Icon */}
      <div className="mb-4 flex items-center justify-center gap-4 text-7xl font-bold text-gray-800 md:text-9xl">
        <AlertTriangle 
          className="h-16 w-16 text-yellow-500 md:h-28 md:w-28" 
          strokeWidth={2} 
        />
        <span>404</span>
      </div>
      
      {/* Subheading */}
      <h1 className="mb-8 text-2xl font-semibold text-gray-700 md:text-4xl">
        Oops... Page Not Found!
      </h1>
      
      {/* Search Bar Container */}
      <div className="w-full max-w-md">
        {/* Suspense is required when rendering a lazy-loaded component */}
        <Suspense 
          fallback={
            <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200"></div>
          }
        >
          <Search />
        </Suspense>
      </div>

    </div>
  );
}