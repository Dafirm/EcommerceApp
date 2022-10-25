import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { handleSearch } from "../redux/slices/productSlice";
import "./SearchInput.css";

const SearchInput = () => {
  const dispatch = useAppDispatch();

  const SubmitHandler = (e: React.FormEvent<HTMLInputElement>) => {
   
    const target = e?.target as HTMLInputElement;
   

    dispatch(handleSearch(target.value));
    console.log(target.value)
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for product"
        onChange={SubmitHandler}
      />
    </form>
  );
};

export default SearchInput;
