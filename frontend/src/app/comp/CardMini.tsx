import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Food } from "@/lib/types";
const CardMini = ({food}:{food:Food}) => {
  return (
    <div>
      <div className="w-[282px] h-[256px] flex flex-col gap-[14px]">
        <div className="w-[282px] h-[186px] rounded-2xl ">
          <CardActionArea>
            <CardMedia
              component="img"
              src={food.image}
              alt=""
              className="w-[282px] h-[186px] rounded-2xl"
            />
          </CardActionArea>
        </div>
        <div>
          <div className="text-[18px] font-bold">{food.name}</div>
          <div className="text-[18px] text-[#18BA51] font-bold">{food.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
