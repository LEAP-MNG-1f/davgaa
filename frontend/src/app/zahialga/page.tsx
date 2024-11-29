import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";

import { Step } from "@mui/material";
import MainStep from "../comp/MainStep";

const page = () => {
  return (
    <div>
      <Header />
      <MainStep />
      <Footer />
    </div>
  );
};

export default page;
