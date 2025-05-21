import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="max-w-md">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-50"
          placeholder="Search here..."
          required
        />
        <button
          type="submit"
          className="text-white absolute bottom-1 bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-2xl text-sm px-2 py-2 ml-1"
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
