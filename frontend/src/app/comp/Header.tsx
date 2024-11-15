import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] h-[56px] flex px-20  justify-between items-center">
        <div className="flex gap-6">
          <div>logo</div>

          <Link
            className="text-[18px] font-bold hover:text-[#18BA51]"
            href={"/"}
          >
            НҮҮР
          </Link>
          <Link
            className="text-[18px] font-bold hover:text-[#18BA51]"
            href={"/tses"}
          >
            ХООЛНЫ ЦЭС
          </Link>
          <Link
            className="text-[18px] font-bold hover:text-[#18BA51]"
            href={"/map"}
          >
              ХҮРГЭЛТИЙН БҮС
          </Link>
          
        </div>
        <div className="flex gap-6 items-center">
          <input className="w-[260px] h-[40px] border border-black rounded-lg "></input>
          <div className="flex gap-3">
            <div>
              <FaCartArrowDown className="w-7 h-7" />
            </div>
            <div className="text-[18px] font-bold hover:text-[#18BA51]">
              Сагс
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <CgProfile className="w-7 h-7" />
            </div>
            <div className="text-[18px] font-bold hover:text-[#18BA51]">
              Нэвтрэх
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
