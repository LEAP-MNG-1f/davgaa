"use client";
import React from "react";
import Alham1 from "./Alham1";
import Alham2 from "./Alham2";

const Alham = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="flex gap-32"> 
        <Alham1 />
        <Alham2 />
      </div>
    </div>
  );
};

export default Alham;
