import React from "react";

const SearchInput = ({ value, onChange, isLoading, onClick }) => (
  <div className="mb-4 flex justify-center">
    <input
      type="text"
      placeholder="Search by name or username"
      value={value}
      onChange={onChange}
      className="border p-2 rounded w-64"
    />
    <button
      onClick={onClick}
      disabled={isLoading}
      className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isLoading ? "Fetching Data..." : "Fetch Data"}
    </button>
  </div>
);

export default SearchInput;
