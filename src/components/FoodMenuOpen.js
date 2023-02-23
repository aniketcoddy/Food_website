import React from "react";
import Food from "./Food";

export default function FoodMenu() {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <img src="burgermenu.png" className="mt-[121px] h-[493px]" />
        </div>
        <div className="flex flex-col">
          
         
          
          
          <div className=" w-[1302px] xl:w-[1092px] lg:w-[877px] md:w-[574px] sm:w-[312px] sm:ml-[-314px] h-fit mt-[40px] ml-[-384px] rounded-[23.3902px] drop-shadow-2xl relative  bg-[#90E051]">
          <input
            placeholder="Search"
            className="w-[253px] h-[45px] bg-[#FFFFFF] rounded-[20px] justify-center items-center flex border-2 pl-[46px] ml-[35px] mt-[23px]"
          />
          <a href="#"><img src="search.png" className="w-[22px] h=-[22px] ml-[51px] mt-[-33px]"/></a>
            <div className="flex flex-row flex-wrap">
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
