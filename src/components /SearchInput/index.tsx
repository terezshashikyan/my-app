import React, { useState } from "react";

import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { weatherForcastsOp } from "../../store/weatherForcasts"; // Assume you have a searchSlice file in your store

const SearchInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(weatherForcastsOp.setCity(searchTerm));
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
