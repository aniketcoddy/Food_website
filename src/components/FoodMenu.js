import React from "react";
import Food from "./Food";

export default function FoodMenu() {
  return (
    <div>

    <div className="flex flex-row gap-[442px]">
      <div>
        <img src="burgermenu.png" className="mt-[121px] h-[493px]" />
      </div>
      <div className="flex flex-col">
        <div className=" w-[470px] h-fit mt-[89px] rounded-[23.3902px] drop-shadow-2xl relative  bg-[#90E051] flex flex-row flex-wrap">
          <Food />
          <Food />
          <Food />
          <Food />
        </div>
        
        
        <div>
            <div className=" w-[470px] h-[480px] mt-[-477px] flex rounded-[23.3902px] drop-shadow-2xl bg-gradient-to-b from-transparent to-[#90E051] absolute"></div>
            <a href="#" className="bg-[#FFFFFF] w-[142px] justify-center flex items-center rounded-[7px] h-[35px] ml-[158px] mt-[-77px] absolute text-[#90E051]">
            <h1 className="text-[18px] font-bold">SEE ALL</h1>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
