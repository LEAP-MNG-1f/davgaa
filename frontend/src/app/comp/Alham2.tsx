import React from "react";

const Alham2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[432px] h-[100px] flex  items-center gap-4 pr-20 px-2 py-2">
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
      <div className="w-[432px] h-[612px] flex flex-col gap-96 shadow-lg justify-center items-center">
        <div className="flex gap-4">
          <div className="w-[184px] h-[121px] border border-black ">photo</div>

          <div className="flex flex-col ">
            <div className="flex  items-center justify-between">
              <div>
                <div className="text-[18px] font-bold">Main Pizza</div>
                <div className="text-[18px] font-bold text-[#18BA51]">
                  34,800₮
                </div>
              </div>
            </div>
            <div className="w-[184px] h-[54px]  rounded-sm text-[16px] text-[#767676]  ">
              Хулуу, төмс, лууван ,сонгино, цөцгийн тос, самрын үр
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center ">
          <div>
            <p className="text-[18px] text-[#5E6166] ">Нийт төлөх дүн</p>
            <p className="text-[18px] text-black">34,800₮</p>
          </div>
          <div className="w-[187px] h-[48px] bg-[#18BA51] flex justify-center items-center text-white font-normal rounded-md">
            Захиалах
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alham2;

<div className="flex gap-4">
  <div className="w-[245px] h-[150px] border border-black ">photo</div>

  <div>
    <div className="flex  items-center justify-between">
      <div>
        <div className="text-[18px] font-bold">Main Pizza</div>
        <div className="text-[18px] font-bold text-[#18BA51]">34,800₮</div>
      </div>
    </div>
    <div className="w-[245px] h-[54px]  rounded-sm text-[16px] text-[#767676] px-1  ">
      Хулуу, төмс, лууван ,сонгино, цөцгийн тос, самрын үр
    </div>
  </div>
</div>;
