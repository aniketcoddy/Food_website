import React from "react";

export default function Download() {
  return (
    <div className="flex flex-row mt-[315px] md:mt-[231px] sm:h-[171px] h-[253px] lg:h-[186px] bg-[#90E051]">
      <img src="wing.png" className="h-[274px] mt-[-156px] lg:h-[172px] lg:mt-[-100px]"></img>
      <img
        src="mobile.png"
        className="flex absolute h-[459px] sm:h-[221px] sm:mt-[-81px] lg:h-[337px] lg:mt-[-107px] lg:ml-[146px] ml-[251px]  sm:ml-[13px] mt-[-147px]"
      ></img>
      <img
        src="mobile2.png"
        className="flex h-[384px] ml-[72px] mt-[-88px] lg:h-[284px] sm:h-[179px] sm:mt-[-58px] sm:ml-[-143px] lg:mt-[-73px] lg:ml-[34px]"
      ></img>
      <div className="gap-[288px] xl:gap-0 lg:gap-[57px] flex">
        <h1 className="mt-[45px] sm:w-[151px] sm:text-[17px] sm:ml-[45px] sm:mt-[40px] lg:mt-[28px] ml-[41px] md:ml-[60px] text-[39px] xl:text-[30px] w-[596px] lg:w-[378px] md:text-[28px] md:w-[346px] font-[Rubik] font-bold text-[#FFFFFF]">
          Now With Your Favorite Mobile Application In Your Pocket
        </h1>
        <img src="ping2.png" className=" mt-[50px] float-right h-[293px] lg:h-[230px] lg:mt-[37px] md:hidden"></img>
      </div>
    </div>
  );
}
