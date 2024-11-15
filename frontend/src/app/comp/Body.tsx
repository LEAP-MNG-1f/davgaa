import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";

import Cardd from "./Cardd";

const Body = () => {
  return (
    <div className="flex justify-center pt-24">
      <div>
        {/* ----------------deed taliin 4 --------------- */}
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
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
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
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
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
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          </div>
          <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
            <div className="px-4 py-4 flex flex-col gap-[15px]">
              <div className="py-[15px] px-[15px]">
                <IoBookOutline className="text-[#18BA51] w-[30px] h-[30px] " />
              </div>
              <div>
                <div className="text-[18px] font-bold">
                  Хоолны өргөн сонголт
                </div>
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Үндсэн хоол</div>
          </div>
          <div className="flex gap-[24px]">
            <Cardd price={5000} name="zairmag" />
            <Cardd price={5000} name="zairmag" />
            <Cardd price={5000} name="zairmag" />
            <Cardd price={5000} name="zairmag" />
          </div>
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Салад ба зууш</div>
          </div>
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

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Амттан</div>
          </div>
          <div className="flex gap-[24px]">
            <Cardd price={5000} name="zairmag" />
            <Cardd price={5000} name="zairmag" />
            <Cardd price={5000} name="zairmag" />
            <Cardd price={5000} name="zairmag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
