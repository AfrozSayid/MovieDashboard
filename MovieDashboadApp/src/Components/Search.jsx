import React from "react";
import { useSearchParam, useUpdateSearchParam } from "../models/SearchProvider";
import "./Styles/search.css";

function Search() {
  const searchParam = useSearchParam();
  const updateSearchParam = useUpdateSearchParam();

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchParam}
        onInput={(e) => updateSearchParam(e.target.value)}
      />
      {searchParam && (
        <button className="reset-button" onClick={() => updateSearchParam("")}>
          &#x2715;
        </button>
      )}
    </div>
  );
}

export default Search;
