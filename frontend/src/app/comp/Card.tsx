import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import CardMini from "./CardMini";
import { Food } from "@/lib/types";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const Card = ({ food }: { food: Food }) => {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("basket") || "[]");
    const updatedCart = [...existingCart, food];
    localStorage.setItem("basket", JSON.stringify(updatedCart));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex gap-[24px] w-[300px] flex-shrink-0">
      <div onClick={handleOpen}>
        <CardMini food={food} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-center gap-[33px]">
            <img src={food.image} alt="" className="w-[500px] h-[500px] " />
            <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
              <div>
                <div className="text-[28px] font-bold">{food.name} </div>
                <div className="text-[18px] font-bold text-[#18BA51]">
                  {food.price.toLocaleString()}₮
                </div>
              </div>
              <div>
                <div className="text-[18px] font-bold ">Орц</div>
                <div className="w-[368px] h-[54px] text-black rounded-sm text-[16px] bg-[#F6F6F6]  px-3 ">
                  {food.ingeredient}
                </div>
              </div>
              <div className="text-[18px] font-bold">Тоо</div>
              <div className="flex gap-5">
                <div className="w-[45px] h-[40px] rounded-xl bg-[#18BA51] flex justify-center items-center">
                  <FiMinus className="font-bold text-white w-5 h-5" />
                </div>
                <div className="w-[254px] font-bold text-center">1</div>
                <div className="w-[45px] h-[40px] rounded-xl bg-[#18BA51] flex justify-center items-center">
                  <GrAdd className="font-bold text-white w-5 h-5" />
                </div>
              </div>

              <button
                className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex"
                onClick={handleAddToCart}
              >
                Сагслах
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Card;
