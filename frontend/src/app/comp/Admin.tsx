import React from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";

import { PiStarFourFill } from "react-icons/pi";

import Cardd from "./Cardd";
const Admin = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10">
        <div className="text-[22px] font-bold">Food menu</div>
        <div className="w-[340px] flex flex-col gap-6">
          <div className="w-[258px] h-[40px] border border-[#D6D8DB] hover:bg-[#18BA51] hover:text-white rounded-lg flex justify-between items-center px-2">
            <div className="font-bold">Breakfast</div>
            <div>
              <CgMoreVerticalAlt className="hover:text-white" />
            </div>
          </div>
          <div className="w-[258px] h-[40px] border border-[#D6D8DB] hover:bg-[#18BA51] hover:text-white rounded-lg flex justify-between items-center px-2">
            <div className="font-bold">Breakfast</div>
            <div>
              <CgMoreVerticalAlt className="hover:text-white" />
            </div>
          </div>
          <div className="w-[258px] h-[40px] border border-[#D6D8DB] hover:bg-[#18BA51] hover:text-white rounded-lg flex justify-between items-center px-2">
            <div className="font-bold">Breakfast</div>
            <div>
              <CgMoreVerticalAlt className="hover:text-white" />
            </div>
          </div>
          <div className="w-[258px] h-[40px] border border-[#D6D8DB] hover:bg-[#18BA51] hover:text-white rounded-lg flex justify-between items-center px-2">
            <div className="font-bold">Breakfast</div>
            <div>
              <CgMoreVerticalAlt className="hover:text-white" />
            </div>
          </div>
          <div className="w-[258px] h-[40px] border border-[#D6D8DB] hover:bg-[#18BA51] hover:text-white rounded-lg flex justify-between items-center px-4">
            <div>
              <CgMathPlus />
            </div>
            <div className="text-[#5E6166] font-bold">Create new category</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Үндсэн хоол</div>
          </div>
          <div className="w-[130px] h-[35px] bg-[#18BA51] text-white font-medium rounded-lg flex justify-center items-center">
            Add new food
          </div>
        </div>
        <div className="flex gap-[24px]">
          <Cardd price={5000} name="zairmag" />
          <Cardd price={5000} name="zairmag" />
          <Cardd price={5000} name="zairmag" />
          <Cardd price={5000} name="zairmag" />
        </div>
      </div>
    </div>
  );
};

export default Admin;
