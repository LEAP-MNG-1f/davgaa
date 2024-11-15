import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex justify-center w-screen h-[545px] ">
      <div
        style={{
          backgroundImage: `url(${"background.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "545px",
        }}
        className="w-[1440px] h-[545px] bg-[#18BA51] flex flex-col gap-10 justify-center items-center"
      >
        <div className="text-[20px] text-white font-bold">Food Delivery</div>
        <div className="flex justify-between w-[1200px]">
          <div className="text-white underline underline-offset-2 font-bold hover:text-[] text-[16px]">
            Нүүр
          </div>
          <div className="text-white underline underline-offset-2 font-bold hover:text-[] text-[16px]">
            Холбоо барихs
          </div>
          <div className="text-white underline underline-offset-2 font-bold hover:text-[] text-[16px]">
            Хоолны цэс
          </div>
          <div className="text-white underline underline-offset-2 font-bold hover:text-[] text-[16px]">
            Үйлчилгээний нөхцөл
          </div>
          <div className="text-white underline underline-offset-2 font-bold hover:text-[] text-[16px]">
            Хүргэлтийн бүс
          </div>
          <div className="text-white underline underline-offset-2 font-bold hover:text-[] text-[16px]">
            Нууцлалын бодлого
          </div>
        </div>
        <div className="flex gap-[18px]">
          <div>
            <FaFacebook className="text-white w-[46px] h-[40px] " />
          </div>
          <div>
            <FaInstagram className="text-white w-[46px] h-[40px] " />
          </div>
          <div>
            <RiTwitterFill className="text-white w-[46px] h-[40px] " />
          </div>
        </div>
        <div className="w-[1200px] h-[1px] bg-white "></div>
        <div>
          <div className="text-white">© 2024 Pinecone Foods LLC </div>
          <div className="text-white">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
