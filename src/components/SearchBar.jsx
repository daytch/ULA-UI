import React, { useRef, useEffect, useCallback } from "react";
import { OS } from "../functions/index.js";

const SearchBox = () => {
  const searchRef = useRef();
  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;
    if (keyCode === 191) {
      searchRef.current.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="py-3">
      <div className="relative max-w-xs">
        <label htmlFor="hs-table-search" className="sr-only">
          Search
        </label>
        <input
          ref={searchRef}
          type="text"
          name="hs-table-search"
          id="hs-table-search"
          className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search for items"
        />
        <div className="hidden sm:block absolute inset-y-0 right-0 p-2">
          <span className="p-1 text-xs font-medium text-gray-400 rounded-md dark:text-gray-500 border border-gray-200 border-spacing-1">
            /
          </span>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
          <svg
            className="h-3.5 w-3.5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
