import { PiStarFourFill } from "react-icons/pi";

import Card from "./Card";
import { GroupFoodType } from "@/lib/types";

const GroupFoods = ({ groupFood }: { groupFood: GroupFoodType }) => {
  return (
    <div className="flex flex-col gap-[24px] pt-[30px] pb-[40px]">
      <div className="flex gap-2">
        <div>
          <PiStarFourFill className="w-8 h-8 text-[#18BA51] " />
        </div>
        <div className="text-[22px] font-bold">{groupFood._id}</div>
      </div>
      <div className="flex gap-2 overflow-auto">
        {groupFood.items.slice(0, 4).map((item) => (
          <Card key={item._id} food={item} />
        ))}
      </div>
    </div>
  );
};

export default GroupFoods;
