import React from "react";

export default function Home() {
  return (
    <div className="flex flex-row md:flex-col  ml-[160px] lg:ml-[77px] md:ml-[154px] sm:ml-[34px] gap-[290px] xl:gap-[27px]">
      <div className="flex flex-col gap-10 mt-[129px] md:mt-[56px]">
        <div className="flex flex-col">
          <h1 className="text-[100px] xl:text-[83px] lg:text-[71px] sm:text-[50px] font-bold font-Rubik sm:leading-[13px] leading-[75px]">
            Tasty Food
          </h1>
          <h1 className="text-[100px] xl:text-[83px] lg:text-[71px]  sm:text-[50px] font-bold font-Rubik text-[#90E051] leading-[138px] xl:leading-[105px]">
            Collections
          </h1>
          <h2 className="text-[16px] font-bold xl:w-[551px] lg:w-[491px] sm:w-[318px] w-[589px] md:mt-[323px]">
            Food Delivery is a thriving business, and there are many
            opportunities for 
            this Business as it Grows.
          </h2>
        </div>

        <div className="flex flex-row md:ml-[82px] sm:ml-[28px] gap-1 pb-[10px] ">
          <a className=" text-[18px] bg-[#90E051] h-[46px] w-[138px] rounded-[4px] flex justify-center text-[#FFFFFF] hover:cursor-pointer hover:bg-[white] hover:text-[#90E051]">
            <h1 className="flex justify-center items-center font-medium">See All</h1>
          </a>
          <a className="text-[18px]  h-[46px] w-[138px] rounded-[4px] flex justify-center text-[#90E051] hover:cursor-pointer">
            <h1 className="flex justify-center items-center font-medium">Menu</h1>
          </a>
        </div>
      </div>

      <div className="mt-[19px] lg:mt-[104px] md:mt-[-500px]">
        <img src="burger.png" className="h-[450px] xl:h-[392px] sm:h-[262px] lg:h-[297px]" />
      </div>
    </div>
  );
}
