import { createContext, useContext, useState } from "react";

const searchContext = createContext("");
const updateSearchParam = createContext(() => {});

export function useSearchParam() {
  return useContext(searchContext);
}
export function useUpdateSearchParam() {
  return useContext(updateSearchParam);
}

function SearchProvider(props) {
  const [searchParam, setSearchParam] = useState("");
  return (
    <searchContext.Provider value={searchParam}>
      <updateSearchParam.Provider value={setSearchParam}>
        {props.children}
      </updateSearchParam.Provider>
    </searchContext.Provider>
  );
}

export default SearchProvider;
