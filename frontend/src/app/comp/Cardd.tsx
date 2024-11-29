import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

type CardPropsType = {
  name: string;
  price: number;
  imageUrl?: string;
};

const Cardd = () => {
  return (
    <div>
      <div className="w-[282px] h-[256px] flex flex-col gap-[14px]">
        <div className="w-[282px] h-[186px] rounded-2xl ">
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              className="w-[282px] h-[186px] rounded-2xl"
            />
          </CardActionArea>
        </div>
        <div>
          <div className="text-[18px] font-bold"></div>
          <div className="text-[18px] text-[#18BA51] font-bold"></div>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
