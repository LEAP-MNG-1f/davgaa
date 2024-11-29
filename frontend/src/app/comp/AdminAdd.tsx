import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  height: 854,
  bgcolor: "background.paper",

  boxShadow: 24,
};

const AdminAdd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        className="w-[130px] h-[35px] bg-[#18BA51] text-white font-medium rounded-lg flex justify-center items-center"
        onClick={handleOpen}
      >
        Add new food
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col ">
            <div className="h-[64px] border border-b-[#E0E0E0] border-b-2 flex justify-between items-center px-4">
              <div>
                <AiOutlineClose style={{ fontSize: "20px" }} />
              </div>
              <div className="text-[24px] font-bold">Create food</div>
              <div className="w-3"></div>
            </div>
            <div className="h-[702px] flex flex-col gap-4 p-6">
              <div className="w-[539px] h-[84px] flex flex-col gap-1">
                <p>Хоолны нэр</p>
                <input
                  type="text"
                  className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-lg"
                />
              </div>
              <div className="w-[539px] h-[84px] flex flex-col gap-1">
                <p>Хоолны ангилал</p>
                <select
                  name=""
                  id=""
                  className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-lg"
                >
                  <option>Дүүрэг сонгоно уу</option>
                  <option>Сонгинохайрхан дүүрэг</option>
                  <option>Сонгинохайрхан дүүрэг</option>
                  <option>Сонгинохайрхан дүүрэг</option>
                  <option>Сонгинохайрхан дүүрэг</option>
                </select>
              </div>
              <div className="w-[539px] h-[84px] flex flex-col gap-1">
                <p>Хоолны орц</p>
                <input
                  type="text"
                  className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-lg"
                />
              </div>
              <div className="w-[539px] h-[84px] flex flex-col gap-1">
                <p>Хоолны үнэ</p>
                <input
                  type="text"
                  className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-lg"
                />
              </div>
              <div className="w-[539px] h-[88px] flex flex-col gap-1">
                <p>Хямдралтай эсэх</p>
                <input
                  type="text"
                  className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-lg"
                />
              </div>
              <div className="w-[539px] h-[150px] flex flex-col gap-1">
                <p>Хоолны зураг</p>
                <div className="w-[284px] h-[122px] bg-[#BABCC41F] rounded-lg  border-dashed border-2 flex flex-col gap-3 items-center justify-center">
                  <p className="font-bold">Add image for the food</p>
                  <div className="w-[109px] h-[40px] bg-[#393939] text-white flex items-center justify-center rounded-lg">
                    photo
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[88px] border border-t-[#E0E0E0] border-b-2 flex gap-4 px-4 items-center justify-end">
              <div className="text-[#3F4145] font-bold">clear</div>
              <div className="w-[109px] h-[40px] bg-[#393939] text-white flex items-center justify-center rounded-lg">
                Continue
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminAdd;
