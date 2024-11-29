"use client";
import React from "react";

import Step2 from "./ Step2";
import Step1 from "./Step1";

const MainStep = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="flex gap-32">
        <Step1 />
        <Step2 />
      </div>
    </div>
  );
};

export default MainStep;
