import React, { useEffect, useState } from "react";

import GroupFoods from "./GroupFoods";

const Bodytses = () => {
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
    <div>
      <div className="flex justify-center pt-24">
        <div>
          <div className="flex gap-[14px]">
            <div className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center">
              Breakfast
            </div>
            <div className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center">
              Soup
            </div>
            <div className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center">
              Main Course
            </div>
            <div className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center">
              Dessert
            </div>
          </div>

          <div className="">
            
            {groupedFoods.map((d, i) => (
              <GroupFoods key={i} groupFood={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytses;
