import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";

const Deed4 = () => {
  return (
    <div>
      <div className="flex gap-[47px]">
        <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
          <div className="px-4 py-4 flex flex-col gap-[15px]">
            <div className="py-[15px] px-[15px]">
              <IoBookOutline className="text-[#18BA51] w-[30px] h-[30px] " />
            </div>
            <div>
              <div className="text-[18px] font-bold">
                Хүргэлтийн төлөв хянах
              </div>
              <div className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</div>
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
          <div className="px-4 py-4 flex flex-col gap-[15px]">
            <div className="py-[15px] px-[15px]">
              <FaRegClock className="text-[#18BA51] w-[30px] h-[30px] " />
            </div>
            <div>
              <div className="text-[18px] font-bold">Шуурхай хүргэлт</div>
              <div className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</div>
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
          <div className="px-4 py-4 flex flex-col gap-[15px]">
            <div className="py-[15px] px-[15px]">
              <PiBowlFoodFill className="text-[#18BA51] w-[30px] h-[30px] " />
            </div>
            <div>
              <div className="text-[18px] font-bold">
                Хүргэлтийн төлөв хянах
              </div>
              <div className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</div>
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
          <div className="px-4 py-4 flex flex-col gap-[15px]">
            <div className="py-[15px] px-[15px]">
              <IoBookOutline className="text-[#18BA51] w-[30px] h-[30px] " />
            </div>
            <div>
              <div className="text-[18px] font-bold">Хоолны өргөн сонголт</div>
              <div className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deed4
