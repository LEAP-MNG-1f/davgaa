import React from "react";
// ------------------------
import { FaCartArrowDown } from "react-icons/fa";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { BiChevronLeft } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import { GoX } from "react-icons/go";
import { Drawer } from "@mui/material";
// ------------------------
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
// ------------------------
const Sags = () => {
  // ------------------------
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };
   // ------------------------
  return (
    <div>
      {/* // ------------------------ */}
      <button onClick={() => toggleDrawer(true)} className="flex gap-3">
        <div>
          <StyledBadge badgeContent={3} color="secondary">
            <FaCartArrowDown className="w-7 h-7 hover:text-[#18BA51]" />
          </StyledBadge>
        </div>

        <div className="text-[18px] font-bold hover:text-[#18BA51]">Сагс</div>
      </button>
      {/* // ------------------------ */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <div className="w-[586px] h-screen flex flex-col gap-[500px]">
          <div className="pl-6 flex flex-col gap-4">
            {/* // ------------------------ */}
            <div className="flex gap-[178px] pl-6 pt-7 items-center">
              <div>
                <BiChevronLeft style={{ color: "black", fontSize: "30px" }} />
              </div>
              <div className="text-[20px] font-bold">Таны сагс</div>
            </div>
            <div className="w-[538px] h-[230px] border border-y-black border-x-white flex items-center justify-center ">
              <div className="flex gap-4">
                <div className="w-[245px] h-[150px] border border-black ">
                  photo
                </div>
                {/* // ------------------------ */}
                <div>
                  <div className="flex  items-center justify-between">
                    <div>
                      <div className="text-[18px] font-bold">Main Pizza</div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <GoX style={{ color: "black", fontSize: "20px" }} />
                    </div>
                  </div>
                  <div className="w-[245px] h-[54px]  rounded-sm text-[16px] text-[#767676] px-1  ">
                    Хулуу, төмс, лууван ,сонгино, цөцгийн тос, самрын үр
                  </div>
                  <div className="flex gap-2">
                    <div className="w-[45px] h-[40px] rounded-xl bg-[#18BA51] flex justify-center items-center">
                      <FiMinus className="font-bold text-white w-5 h-5" />
                    </div>
                    <div className="w-[45px] font-bold flex justify-center items-center">
                      1
                    </div>
                    <div className="w-[45px] h-[40px] rounded-xl bg-[#18BA51] flex justify-center items-center">
                      <GrAdd className="font-bold text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[586px] h-[172px] shadow-lg flex gap-5 justify-center items-center ">
            <div>
              <p className="text-[18px] text-[#5E6166] ">Нийт төлөх дүн</p>
              <p className="text-[18px] text-black">34,800₮</p>
            </div>
            <div className="w-[256px] h-[48px] bg-[#18BA51] flex justify-center items-center text-white font-normal rounded-md">
              Захиалах
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sags;
