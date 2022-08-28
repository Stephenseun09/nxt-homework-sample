import React, { useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="transition-all duration-200 ease-linear"
        onClick={() => setIsOpen(!isOpen)}
      >
        Search
      </div>
      {isOpen && (
        <input
          type="text"
          placeholder="Search"
          className=" w-16 h-8 border border-secondary-dark  transition-all duration-200 ease-linear"
        />
      )}
    </div>
  );
};

export default Search;
