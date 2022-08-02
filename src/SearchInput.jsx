import React from "react";

const SearchInput = ({ atInputValue }) => {
  return (
    <div>
      <form action="">
        <input
          type="search"
          onChange={(e) => {
            atInputValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
