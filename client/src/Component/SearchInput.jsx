import React from 'react';

const SearchInput = () => {
  return (
    <div className="relative flex-1 max-w-lg">
      {/* Input */}
      <input
        type="text"
        placeholder="Search your product..."
        className="h-10 w-full rounded-full border border-lightText pl-4 pr-10 outline-none focus:border-blue-600 text-sm text-gray-700 placeholder-gray-400"
      />


 
    </div>
  );
};

export default SearchInput;
