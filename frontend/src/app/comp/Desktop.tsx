import React from "react";

const Desktop = () => {
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
      <div className="flex items-center justify-between h-full w-[1340px]">
        <div className="flex flex-col gap-6 max-w-[384px]">
          <p className="font-Poppins font-semibold text-white text-[55px] leading-[90%] tracking-[0.55px]">
            Pinecone <br />
            Food delivery
          </p>
          <div className="border border-white border-t-0 border-x-0 opacity-[0.5] w-full"></div>
          <p className="font-Comfortaa font-bold leading-[120%] text-white text-[22px] tracking-[0.22px] ">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="max-w-[588px] static z-10 ">
          <img src="./GreenZoneImg.png" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
