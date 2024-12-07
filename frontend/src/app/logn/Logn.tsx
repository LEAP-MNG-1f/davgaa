import React from "react";
import Link from "next/link";
const Logn = () => {
  return (
    <div className="flex justify-center py-10 ">
      <div className="h-[509px] flex flex-col justify-between items-center ">
        <p className="text-[28px] font-bold">Нэвтрэх</p>
        <div className="h-[177px] flex flex-col justify-between">
          <div>
            <p>Имэйл </p>
            <input
              className="w-[384px] h-[48px] bg-[#F7F7F8] border border-[#ECEDF0] rounded-md"
              type=" text"
            />
          </div>
          <div>
            <p>Нууц үг</p>
            <input
              className="w-[384px] h-[48px] bg-[#F7F7F8] border border-[#ECEDF0] rounded-md"
              type="password"
            />
          </div>
        </div>
        <div className="h-[127px] flex flex-col justify-between">
          <button className="w-[384px] h-[48px] bg-[#18BA51] font-bold text-white flex justify-center items-center rounded-md">
            Нэвтрэх
          </button>
          <Link
            className="w-[384px] h-[48px] border border-[#18BA51] font-bold text-black flex justify-center rounded-md items-center"
            href={"/signup"}
          >
            Бүртгүүлэх
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Logn;
