import React from "react";
import Food from "./Food";

export default function FoodMenu() {
  return (
    <div>

    <div className="flex flex-row gap-[537px] xl:gap-[215px] lg:gap-[112px] md:gap-[25px]">
      <div>
        <img src="burgermenu.png" className="mt-[121px] md:mt-[193px] h-[493px] md:h-[278px]  lg:h-[338px] md:absolute sm:absolute" />
      </div>
      <div className="flex flex-col">
        <div className=" w-[470px] sm:w-[319px] md:w-[382px] md:ml-[101px] sm:ml-[-10px] h-fit mt-[89px] rounded-[23.3902px] drop-shadow-2xl relative   bg-[#90E051] flex flex-row flex-wrap">
          <Food />
          <Food />
          <Food />
          <Food />
        </div>
        
        
        <div>
            <div className=" w-[470px] sm:w-[319px] md:w-[382px] h-[480px] md:ml-[101px] sm:ml-[-10px] mt-[-477px] flex rounded-[23.3902px] drop-shadow-2xl bg-gradient-to-b from-transparent to-[#90E051] absolute"></div>
            <a href="#" className="bg-[#FFFFFF] w-[142px] justify-center flex items-center rounded-[7px] h-[35px] sm:ml-[100px] w-[107px] ml-[158px] md:ml-[221px] ms:ml-[126px] mt-[-77px] absolute text-[#90E051]">
            <h1 className="text-[18px] font-bold">SEE ALL</h1>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
