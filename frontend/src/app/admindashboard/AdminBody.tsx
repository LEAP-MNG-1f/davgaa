import React from "react";
import { FaTrash } from "react-icons/fa";

const AdminBody = () => {
  return (
    <div className="flex justify-center pt-16">
      <div className="w-[1024px] h-[624px] border border-[#ECEDF0] rounded-lg">
        <div className="h-[76px]  text-[20px] font-bold flex items-center px-4">
          Admin dashboard
        </div>
        <div className="flex">
          <div className="w-[230px]">
            <div className="h-[44px] bg-[#F7F7F8] border border-[#D6D8DB] border-r-0 border-l-0 flex items-center px-2 text-[14px] font-bold">
              Order name
            </div>
            <div className="h-[72px] border border-[#D6D8DB] border-r-0 border-l-0 border-t-0 flex items-center gap-3 px-3">
              <div className="w-10 h-10 border border-black ">img</div>
              <div>
                <p className="text-[12px] font-bold">#87574</p>
                <p className="text-[14px] font-bold">Breakfast</p>
              </div>
            </div>
          </div>
          <div className="w-[140px]">
            <div className="h-[44px] bg-[#F7F7F8] border border-[#D6D8DB] border-r-0 border-l-0 flex items-center px-2 text-[14px] font-bold">
              Buyer info
            </div>
            <div className="h-[72px] border border-[#D6D8DB] border-r-0 border-l-0 border-t-0 flex items-center px-3">
              <div>
                <p className="text-[16px] font-bold">99823872</p>
                <p className="text-[14px] font-bold">boldoo</p>
              </div>
            </div>
          </div>
          <div className="w-[229px]">
            <div className="h-[44px] bg-[#F7F7F8] border border-[#D6D8DB] border-r-0 border-l-0 flex items-center px-2 text-[14px] font-bold">
              Payment
            </div>
            <div className="h-[72px] border border-[#D6D8DB] border-r-0 border-l-0 border-t-0 flex items-center px-3">
              <div>
                <p className="text-[16px] font-bold">23000$</p>
                <p className="text-[14px] font-bold"></p>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="w-[230px]">
            <div className="h-[44px] bg-[#F7F7F8] border border-[#D6D8DB] border-r-0 border-l-0 flex items-center px-2 text-[14px] font-bold">
              Address
            </div>
            <div className="h-[72px] border border-[#D6D8DB] border-r-0 border-l-0 border-t-0 flex items-center px-3">
              <div>
                <p className="text-[14px] font-bold">
                  БЗД, 2-р хороо, Нархан хотхон, 2-р орц, 5 - 63тоот
                </p>
              </div>
            </div>
          </div>
          <div className="w-[127px]">
            <div className="h-[44px] bg-[#F7F7F8] border border-[#D6D8DB] border-r-0 border-l-0 flex items-center px-2 text-[14px] font-bold">
              Delivery state
            </div>
            <div className="h-[72px] border border-[#D6D8DB] border-r-0 border-l-0 border-t-0 flex items-center px-3">
              <div>
                <p className="text-[14px] font-bold">Progress</p>
              </div>
            </div>
          </div>
          <div className="w-[68px]">
            <div className="h-[44px] bg-[#F7F7F8] border border-[#D6D8DB] border-r-0 border-l-0 flex items-center px-2 text-[14px] font-bold"></div>
            <div className="h-[72px] border border-[#D6D8DB] border-r-0 border-l-0 border-t-0 flex items-center px-3">
              <FaTrash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBody;
