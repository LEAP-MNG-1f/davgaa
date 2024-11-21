"use client";

import { useEffect } from "react";
import HomePage from "./comp/HomePage";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("https://davgaa.onrender.com");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}
