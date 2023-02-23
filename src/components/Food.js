import React from "react";

export default function Food() {
  return (
    <div className=" w-[180px] sm:w-[127px] h-[202px] sm:h-[153px] md:w-[147px] md:h-[183px] sm:ml-[23px] ml-[34px] rounded-[24px] bg-[#FFFFFF] mt-[57px] mb-[23px]  pt-2 flex flex-col">
      <img src="Food2.png" className=" h-[90px] w-[114px] sm:w-[78px] sm:mt-[-33px] sm:h-[61px] mt-[-43px] ml-[37px] " />
      <h1 className="font-[Rubik] text-[16.78px] md:text-[12.78px] ml-[19px] leading-[32px] md:leading-[22px]">Cheeze Burger</h1>
      <p className="font-[Rubik] text-[12.2px] md:text-[11.2px] ml-[22px] ">
        A crunchy patato Cheeze burger
      </p>
      <div className="flex flex-row  ml-[19px] mt-[11px] gap-[7px]">
        <img src="Star 1.png" className="h-[17px] md:h-[14px]"/>
        <h1 className="text-[13px] md:text-[11px] font-medium font-[Rubik]">5.3</h1>
      </div>
      <div className="flex flex-row ml-[19px] gap-[45px] md:gap-[37px]">
      <h1 className="text-[17px] font-medium font-[Rubik] ml-[4px] mt-[8px]  md:text-[11px] text-[#90E051]">$21.53</h1>
      <img src="crat.png" className="h-[34px] md:h-[28px] ml-[8px] sm:ml-[-3px] mt-[1px] md:mt-[-3px]"/>
      </div>
      <img src="Union.png" className=" h-[11px] mt-[155px] sm:ml-[103px] sm:mt-[115px] ml-[143px] md:h-[10px] md:mt-[144px] md:ml-[112px] absolute"/>
    </div>
  );
}