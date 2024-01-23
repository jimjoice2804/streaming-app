"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AtomicSpinner from "atomic-spinner";
import { useRecoilState } from "recoil";
import { dataShare } from "../recoil/atom/streamingDataShare";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectVal, setSelectVal] = useState("movie");
  const [data, setData] = useRecoilState(dataShare);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
 
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const SearchHandler = async () => {
    setIsLoading(true);
    let tempTitle = "";
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] === " ") {
        tempTitle = tempTitle.concat("+");
      } else {
        tempTitle = tempTitle.concat(inputValue[i]);
      }
    }

    console.log(tempTitle);
    console.log(selectVal);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${tempTitle}&type=${selectVal}`
    );
    const data = await response.json();
    setData(data);
    console.log("data", data);
    router.push("pages/movie");
    setIsLoading(false);
  };
  return (
    <div className="h-[34.8125rem] w-[55.125rem] flex items-center justify-center bg-[#C5FAD5]">
      {isLoading ? (
        <AtomicSpinner />
      ) : (
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
      )}
    </div>
  );
};

export default NavBar;
