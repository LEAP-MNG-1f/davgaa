import React from "react";

const HeaderPhoto = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"background.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "788px",
      }}
      className="flex justify-center w-screen h-[788px] bg-[#18BA51]  "
    >
      <div className="w-[1440px] h-[788px] ">
        <div className="w-[384px]">
          <div className="text-[55px] text-white">Pinecone Food delivery</div>
          <div className="w-[383px] h-[2px] bg-[#FFFFFF]"></div>
          <div className="text-[22px] text-white">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeaderPhoto;
