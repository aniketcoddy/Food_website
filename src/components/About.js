import React from "react";

export default function About() {
  return (
    <div className="flex flex-row  mt-[248px] ml-[-6px] xl:ml-[-417px] sm:ml-[-432px]">
      <img src="Food1.png" className="flex absolute ml-[496px] mt-[285px] h-[71px] md:mt-[134px] md:ml-[429px] sm:mt-[-57px] sm:ml-[456px]"/>
      <div className="absolute bg-white ml-[520px] mt-[330px] md:mt-[184px] md:ml-[458px] h-[205px] w-[485px] rounded-[12px] drop-shadow-2xl sm:w-[286px] sm:h-[174px]">
        <h1 className="mt-[15px] ml-[19px] text-[34px] font-[Rubik] font-bold sm:text-[23px] sm:mt-[10px]">About Us</h1>
        <p className="ml-[19px] mt-[8px] w-[416px] text-[17px] text-[#828282] font-semibold font-[Rubik] sm:text-[13px] sm:w-[268px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. 
        </p>
      </div>
      <img src="restraunt.png" className="ml-[903px] h-[458px] md:ml-[624px] md:h-[337px] sm:ml-[503px]  sm:h-[201px]"/>
      <img src="burger3.png" className="flex absolute ml-[1388px] mt-[335px] md:hidden"/>
    </div>
  );
}
