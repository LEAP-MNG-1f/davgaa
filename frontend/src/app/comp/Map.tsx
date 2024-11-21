import React from "react";


import { PiStarFourFill } from "react-icons/pi";
import MapWorld from "./MapWorld";
const Map = () => {
 
  return (
    <div className="flex justify-center pt-[61px]">
      <div className="flex flex-col gap-10 pb-10">
        <MapWorld />
        <div className="flex items-center gap-2">
          <div>
            <PiStarFourFill className="w-8 h-8 text-[#18BA51]" />
          </div>
          <div className="text-[22px] font-bold">
            Хүргэлтийн бүс дэх хаягууд
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[588px] h-[388px] rounded-2xl shadow-xl border px-6 py-6">
            <div className="h-[56px] w-[540px] border-l-0 border-t-0 border-r-0 border-b-[#18BA51] border-[2px] text-[20px] font-bold ">
              А бүс
            </div>
            <div className="flex pt-4">
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
            </div>
          </div>
          <div className="w-[588px] h-[388px] rounded-2xl shadow-xl border px-6 py-6">
            <div className="h-[56px] w-[540px] border-l-0 border-t-0 border-r-0 border-b-[#18BA51] border-[2px] text-[20px] font-bold ">
              А бүс
            </div>
            <div className="flex pt-4">
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
