import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react"; // Aliased to prevent collision with component name

const Search = ({ allproducts, setSearchData }) => {
  const [searchVal, updateSearchVal] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const navigation = useNavigate();

  const update = (event) => {
    event.preventDefault(); // Prevent standard form submission behavior

    const result = allproducts.filter((product) =>
      product.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    if (result.length < 1) {
      setShow(true);
      hidePopover(2);
    } else {
      setSearchData(result);
      navigation(`/searchResult`);
    }
  };

  const hidePopover = (seconds) => {
    const timer = setTimeout(() => {
      setShow(false);
    }, seconds * 1000);
    // Note: To prevent memory leaks, it's generally better to clear timeouts in a useEffect, 
    // but this maintains your original logic pattern.
    return () => clearTimeout(timer);
  };

  return (
    // We attach the update function to onSubmit so it handles both 'Enter' key and button click
    <form className="relative w-full" onSubmit={update} ref={ref}>
      <div className="flex w-full shadow-sm">
        <label className="sr-only" htmlFor="searchInput">
          Search
        </label>
        <input
          id="searchInput"
          name="searchInput"
          type="text"
          className="w-full rounded-l-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Search"
          required
          value={searchVal}
          onChange={(event) => updateSearchVal(event.target.value)}
        />

        {/* The disabled prop handles the styling and function toggling natively */}
        <button
          type="submit"
          aria-label="Search"
          disabled={!searchVal}
          className="flex items-center justify-center rounded-r-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Replaces React-Bootstrap Overlay/Popover */}
      {show && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-md border border-red-200 bg-red-50 p-3 shadow-lg">
          <h3 className="text-sm font-medium text-red-800">
            Search result is empty. Please try again.
          </h3>
        </div>
      )}
    </form>
  );
};

export default Search;