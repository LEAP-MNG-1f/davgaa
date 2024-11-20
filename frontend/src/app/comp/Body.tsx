import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";

import Cardd from "./Cardd";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";

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
const Body = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex justify-center pt-24">
      <div>
        {/* ----------------deed taliin 4 --------------- */}
        <div className="flex gap-[47px]">
          <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
            <div className="px-4 py-4 flex flex-col gap-[15px]">
              <div className="py-[15px] px-[15px]">
                <IoBookOutline className="text-[#18BA51] w-[30px] h-[30px] " />
              </div>
              <div>
                <div className="text-[18px] font-bold">
                  Хүргэлтийн төлөв хянах
                </div>
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          </div>
          <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
            <div className="px-4 py-4 flex flex-col gap-[15px]">
              <div className="py-[15px] px-[15px]">
                <FaRegClock className="text-[#18BA51] w-[30px] h-[30px] " />
              </div>
              <div>
                <div className="text-[18px] font-bold">Шуурхай хүргэлт</div>
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          </div>
          <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
            <div className="px-4 py-4 flex flex-col gap-[15px]">
              <div className="py-[15px] px-[15px]">
                <PiBowlFoodFill className="text-[#18BA51] w-[30px] h-[30px] " />
              </div>
              <div>
                <div className="text-[18px] font-bold">
                  Хүргэлтийн төлөв хянах
                </div>
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          </div>
          <div className="w-[264px] h-[155px] shadow-xl rounded-2xl border border-[#D6D8DB]">
            <div className="px-4 py-4 flex flex-col gap-[15px]">
              <div className="py-[15px] px-[15px]">
                <IoBookOutline className="text-[#18BA51] w-[30px] h-[30px] " />
              </div>
              <div>
                <div className="text-[18px] font-bold">
                  Хоолны өргөн сонголт
                </div>
                <div className="text-[14px]">
                  Захиалга бэлтгэлийн явцыг хянах
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Үндсэн хоол</div>
          </div>
          <div className="flex gap-[24px]">
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Салад ба зууш</div>
          </div>
          <div className="flex gap-[24px]">
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] pt-[60px] pb-[80px]">
          <div className="flex gap-2">
            <div>
              <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
            </div>
            <div className="text-[22px] font-bold">Амттан</div>
          </div>
          <div className="flex gap-[24px]">
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
            <div onClick={handleOpen}>
              <Cardd price={5000} name="zairmag" />
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex items-center justify-center gap-[33px]">
                  <div className="w-[500px] h-[500px] border border-black">
                    photo
                  </div>
                  <div className="w-[384px] h-[398px] flex flex-col gap-[32px]">
                    <div>
                      <div className="text-[28px] font-bold">Main Pizza </div>
                      <div className="text-[18px] font-bold text-[#18BA51]">
                        34,800₮
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold ">Орц</div>
                      <div className="w-[368px] h-[54px] bg-[#F6F6F6] rounded-sm text-[16px] text-[#767676] px-3  ">
                        Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
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
                    <div className="w-[384px] h-[48px] bg-[#18BA51] rounded-sm justify-center text-white items-center flex">
                      Сагслах
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
