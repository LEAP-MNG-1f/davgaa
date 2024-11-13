import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] h-[56px] flex px-20  justify-between items-center">
        <div className="flex gap-6">
          <div>logo</div>
          <div className="text-[18px] font-bold">НҮҮР</div>
          <div className="text-[18px] font-bold">ХООЛНЫ ЦЭС</div>
          <div className="text-[18px] font-bold">ХҮРГЭЛТИЙН БҮС</div>
        </div>
        <div className="flex gap-6 items-center">
          <input className="w-[260px] h-[40px] border border-black rounded-lg "></input>
          <div className="flex gap-3">
            <div>
              <FaCartArrowDown className="w-5 h-5"/>
            </div>
            <div className="text-[18px] font-bold">Сагс</div>
          </div>
          <div className="flex gap-3">
            <div>
              <CgProfile  className="w-5 h-5"/>
            </div>
            <div className="text-[18px] font-bold">Нэвтрэх</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
