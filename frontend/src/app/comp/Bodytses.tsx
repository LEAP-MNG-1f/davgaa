import React from "react";




import Card from "./Card";

const Bodytses = () => {

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

          <div className="flex flex-col  pt-[60px] pb-[80px]">
            <Card />
          </div>

          <div className="flex flex-col  pt-[60px] pb-[80px]">
            <Card />
          </div>

          <div className="flex flex-col pt-[60px] pb-[80px]">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytses;
