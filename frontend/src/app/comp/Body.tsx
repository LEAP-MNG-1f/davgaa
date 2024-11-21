import React from "react";

import { PiStarFourFill } from "react-icons/pi";

import Card from "./Card";
import Deed4 from "./Deed4";

const Body = () => {
  return (
    <div className="flex justify-center pt-24">
      <div>
        <Deed4 />

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Үндсэн хоол</div>
          </div>
          <Card />
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Салад ба зууш</div>
          </div>
          <Card />
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Амттан</div>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Body;
