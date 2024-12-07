import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center py-10 ">
      <div className="h-[509px] flex flex-col justify-between items-center ">
        <p className="text-[28px] font-bold">Бүртгүүлэх</p>
        <div className="h-[220px] flex flex-col justify-between">
          <div>
            <p>Нэр </p>
            <input
              className="w-[384px] h-[48px] bg-[#F7F7F8] border border-[#ECEDF0] rounded-md"
              type=" text"
            />
          </div>
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
          <div>
            <p>Нууц үг давтах</p>
            <input
              className="w-[384px] h-[48px] bg-[#F7F7F8] border border-[#ECEDF0] rounded-md"
              type="password"
            />
          </div>
        </div>
        <div className="h-[60px] flex flex-col justify-between">
          <button className="w-[384px] h-[48px] border border-[#18BA51] font-bold text-black flex justify-center rounded-md items-center">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
