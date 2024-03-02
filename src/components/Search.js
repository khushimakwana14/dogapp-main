import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchDogs, searchFetchDogs } from "../redux/actions";
const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="form py-3">
        <div className="form-container w-50 mx-auto">
          <input
            type="search"
            className="form-control mx-auto"
            placeholder="search"
            id="search"
            onChange={(event) => {
              setSearch(event.target.value);
              search.length !== 0
                ? dispatch(searchFetchDogs(search))
                : dispatch(fetchDogs());
            }}
            value={search}
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
