import React from "react";
import Cardd from "./Cardd";

import { PiStarFourFill } from "react-icons/pi";
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
            <div className="flex gap-[24px]">
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
            </div>
          </div>

          <div className="flex flex-col  pt-[60px] pb-[80px]">
            <div className="flex gap-[24px]">
              <Cardd
                price={5000}
                name="zairmag"
                imageUrl="https://images.ctfassets.net/awb1we50v0om/2Spf80TME2zIhLqsi3Zxv9/919421a45f3260ee426c99c35235f1c8/Plates03__3__copy3.jpg?w=1920&fm=webp&q=70"
              />
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
            </div>
          </div>

          <div className="flex flex-col pt-[60px] pb-[80px]">
            <div className="flex gap-[24px]">
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
              <Cardd price={5000} name="zairmag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytses;
