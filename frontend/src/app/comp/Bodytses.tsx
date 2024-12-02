import React, { useEffect, useState } from "react";
import GroupFoods from "./GroupFoods";
import { GroupFoodType } from "@/lib/types";

const Bodytses = () => {
  const [groupedFoods, setGroupedFoods] = useState<GroupFoodType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  console.log("groupedFoods:", groupedFoods);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/foods`
        );
        const data = await response.json();
        console.log("Foods data:", data.data);
        setGroupedFoods(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filterFoodsByCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredFoods = selectedCategory
    ? groupedFoods.filter((food) => food._id === selectedCategory)
    : groupedFoods;

  return (
    <div>
      <div className="flex justify-center pt-24">
        <div>
          <div className="flex gap-[25px]">
            <div
              className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center"
              onClick={() => filterFoodsByCategory("Breakfast")}
            >
              Breakfast
            </div>
            <div
              className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center"
              onClick={() => filterFoodsByCategory("Soup")}
            >
              Soup
            </div>
            <div
              className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center"
              onClick={() => filterFoodsByCategory("Main Course")}
            >
              Main Course
            </div>
            <div
              className="w-[280px] h-[43px] rounded-lg border border-[#D6D8DB] text-black text-[18px] hover:text-white hover:bg-[#18BA51] font-medium flex items-center justify-center"
              onClick={() => filterFoodsByCategory("Dessert")}
            >
              Dessert
            </div>
            
          </div>

          <div className="">
            {filteredFoods.map((d, i) => (
              <GroupFoods key={i} groupFood={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytses;
