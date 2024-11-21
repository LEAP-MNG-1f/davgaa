"use client";
import React from "react";

const Alham1 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[432px] h-[100px] flex  items-center gap-4 pr-20">
        <div>
          <div className="w-12 h-12 rounded-[50%] border-2 border-[#0468C8]  flex justify-center items-center">
            <div className="w-6 h-6 bg-[#0468C8] rounded-[50%] "></div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] text-[#8B8E95]">Алхам 1</p>
          <p className="text-[20px] font-bold">Хаягийн мэдээлэл оруулах</p>
          <p className="text-[16px] text-[#0468C8] font-bold">
            Хүлээгдэж байна
          </p>
        </div>
      </div>
      <div className="w-[432px] h-[612px] flex flex-col gap-10 justify-center items-center shadow-lg">
        <div className="h-[209px] flex flex-col gap-4">
          <p>Хаяг аа оруулна уу</p>
          <select name="" id="" className="h-12 w-[384px] h- bg-[#F7F7F8]">
            <option>Дүүрэг сонгоно уу</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
          </select>
          <select name="" id="" className="h-12 w-[384px] bg-[#F7F7F8]">
            <option>Дүүрэг сонгоно уу</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
          </select>
          <select name="" id="" className="h-12 w-[384px] bg-[#F7F7F8]">
            <option>Дүүрэг сонгоно уу</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
          </select>
        </div>
        <div className="flex justify-center flex-col gap-8">
          <div>
            <p>Нэмэлт мэдээлэл</p>
            <input type="text" className="w-[384px] h-[112px] bg-[#F7F7F8]" />
          </div>
          <div>
            <p>Утасны дугаар*</p>
            <input type="text" className="h-12 w-[384px] h- bg-[#F7F7F8]" />
          </div>
          <div>
            <div>Төлбөр төлөх </div>
            <div className="flex">
              <div className="flex">
                <input type="checkbox" />
                <p>Бэлнээр</p>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p>Бэлнээр</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alham1;
