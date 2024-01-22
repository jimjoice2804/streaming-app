"use client";
import { useState } from "react";
import useSWR from "swr";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectVal, setSelectVal] = useState("movie");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const SearchHandler = () => {
    const { data, isLoading, error } = useSWR(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}&type=${selectVal}`, fetcher
    );
  };

  http: return (
    <div className="h-[34.8125rem] w-[55.125rem] flex items-center justify-center bg-[#C5FAD5]">
      <div className="bg-[#FFFFD2] h-[5.5rem] w-[51.1875rem] flex flex-row items-center text-black justify-evenly">
        <div className="flex flex-col text-black">
          <label htmlFor="searchByTitle">Search By Titile</label>
          <input
            className="rounded border p-2 outline-none shadow"
            type="text"
            name="searchByTitle"
            id="searchByTitle"
            placeholder="Enter Title"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-black rounded border p-2 outline-none shadow">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id=""
            onChange={(e) => setSelectVal(e.target.value)}
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div>
          <button
            className="rounded border p-2 outline-none shadow hover:bg-sky-200"
            type="submit"
            onClick={SearchHandler}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
