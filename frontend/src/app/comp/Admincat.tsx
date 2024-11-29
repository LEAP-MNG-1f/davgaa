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
  height: 284,
  bgcolor: "background.paper",

  boxShadow: 24,
};
const Admincat = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={handleOpen} className="text-[#5E6166] font-bold">
        Create new category
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
            <div className=" h-[132px] p-4">
              <div className="w-[539px] h-[84px] flex flex-col gap-1">
                <p>Хоолны нэр</p>
                <input
                  type="text"
                  className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-lg"
                />
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

export default Admincat;
