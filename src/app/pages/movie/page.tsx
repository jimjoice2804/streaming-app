"use client";
import React from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { dataShare } from "@/app/recoil/atom/streamingDataShare";

const Page = () => {
  const data = useRecoilValue(dataShare);
  console.log("data => ", data);
  return (
    <div className="h-screen w-screen  bg-[#C5FAD5]">
      {data.Response === "True" ? (
        <div className="">
          {data.Search.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.Title}</h1>
                <h1>{item.Year}</h1>
                <h1>{item.imdbID}</h1>
                <h1>{item.Type}</h1>
                <Image
                  src={item.Poster}
                  alt="poster"
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>No Data To Display Here</h1>
        </div>
      )}
    </div>
  );
};

export default Page;
