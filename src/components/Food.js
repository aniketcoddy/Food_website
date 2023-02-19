import React from "react";

export default function Food() {
  return (
    <div className=" w-[180px] h-[202px] ml-[34px] rounded-[24px] bg-[#FFFFFF] mt-[40px] mb-[23px]  pt-2 flex flex-col">
      <img src="Food2.png" className=" h-[90px] w-[114px] mt-[-43px] ml-[37px] " />
      <h1 className="font-[Rubik] text-[16.78px] ml-[19px] leading-[32px]">Cheeze Burger</h1>
      <p className="font-[Rubik] text-[12.2px] ml-[22px] ">
        A crunchy patato Cheeze burger
      </p>
      <div className="flex flex-row  ml-[19px] mt-[11px] gap-[7px]">
        <img src="Star 1.png" className="h-[17px]"/>
        <h1 className="text-[13px] font-medium font-[Rubik]">5.3</h1>
      </div>
      <div className="flex flex-row ml-[19px] gap-[45px]">
      <h1 className="text-[17px] font-medium font-[Rubik] ml-[4px] mt-[8px] text-[#90E051]">$21.53</h1>
      <img src="crat.png" className="h-[34px] ml-[8px] mt-[1px]"/>
      </div>
      <img src="Union.png" className=" h-[11px] mt-[155px] ml-[143px] absolute"/>
    </div>
  );
}
