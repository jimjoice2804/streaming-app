"use client";
import React from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { dataShare } from "@/app/recoil/atom/streamingDataShare";

const Page = () => {
  const data = useRecoilValue(dataShare);
  console.log("data => ", data);
  return (
    <div className="h-auto w-screen bg-[#C5FAD5] flex flex-wrap justify-center items-center">
      {data.Response === "True" ? (
        data.Search.map((item, index) => {
          return (
            <div
              className="m-4 bg-white shadow-lg rounded-lg overflow-hidden"
              key={index}
            >
              <Image
                src={item.Poster}
                alt="poster"
                width={200}
                height={200}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6 font-bold">
                <h1 className="text-xl font-bold">{item.Title}</h1>
                <h2 className="text-gray-700"> Year {item.Year}</h2>
                <h3 className="text-gray-500"> Type {item.Type}</h3>
                <h4 className="text-sm text-gray-500"> imdbID {item.imdbID}</h4>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-xl font-bold h-screen w-screen flex justify-center items-center">
          <h1>No Data To Display Here</h1>
        </div>
      )}
    </div>
  );
};

export default Page;
