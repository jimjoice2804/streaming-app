'use client'
import React from "react";
import { useRecoilValue } from "recoil";
import { dataShare } from "@/app/recoil/atom/streamingDataShare";

const Page = () => {
  const data = useRecoilValue(dataShare);
  console.log("data => ", data);
  return (
    <div className="h-screen w-screen  bg-[#C5FAD5]">
      OLA
    </div>
  );
};

export default Page;
