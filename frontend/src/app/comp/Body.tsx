import React, { useEffect, useState } from "react";

import Frame from "./Frame";
import GroupFoods from "./GroupFoods";

const Body = () => {
  const [groupedFoods, setGroupedFoods] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`
        );
        const data = await response.json();
        console.log("data data:", data.data);
        setGroupedFoods(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center pt-24">
      <div>
        <Frame />
        {
          groupedFoods.map((d,i)=><GroupFoods key={i} groupFood={d}/>)
        }
      </div>
    </div>
  );
};

export default Body;
