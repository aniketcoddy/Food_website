import React from "react";

export default function Customer() {
  return (
    <div className="flex flex-row mt-[180px] gap-[119px] lg:gap-0"> 
      <div className="flex flex-col mt-[129px] lg:mt-[71px] md:mt-[-72px] sm:mt-[-91px] ml-[244px] xl:ml-[80px] md:ml-[122px] sm:ml-[23px]">
        <h1 className="text-[60px] font-bold text-[#333333] font-[Rubik] leading-[6.5rem] xl:text-[46px] sm:text-[37px]">Customer Review</h1>
        <p className="w-[614.1px] xl:w-[438px] text-[15.1px] xl:text-[14.1px] sm:text-[12.1px] sm:w-[329px] font-[Rubik] text-[#828282]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex flex-row gap-[23px] items-center mt-[48px] lg:mt-[26px]">
          <img src="human.png" className="h-[66px] lg:h-[56px]" />
          <div className="flex flex-col ">
            <h1 className="text-[16px] font-[Rubik] text-[#90E051] font-bold">Abdur Rahman</h1>
            <h2 className="text-[13px] font-[Rubik] text-[#828282] ">Customer</h2>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <img src="image.png" className=" ml-[55px] h-[386.85px] lg:h-[265.85px] relative" />
      </div>
      <div className="md:hidden">
        <div className="flex flex-col bg-[#FFFFFF] mt-[279px] ml-[-678px] lg:ml-[-381px] lg:mt-[190px] gap-[7px] w-[394px] lg:w-[276px] lg:h-[147.28px] h-[202.28px] drop-shadow-xl rounded-[10px]  absolute">
          <div className="flex flex-row mt-[23px] ml-[23px] gap-[208px] lg:gap-[104px]">
            <h1 className="text-[16px] font-[Rubik] text-black font-bold">Order now</h1>
            <h1 className="text-[16px] font-[Rubik] text-[#4F4F4F] font-bold">10.00$</h1>
          </div>
          <img src="Star.png" className="w-[80.1px] h-[15.19px] ml-[23px]" />
          <p className="w-[333px] ml-[23px] text-[15px] mt-[12px] lg:w-[249px] lg:ml-[23px] lg:text-[11px] lg:mt-[-5px] text-[#828282] font-[Rubik] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna,
          </p>
        </div>
      </div>
    </div>
  );
}
