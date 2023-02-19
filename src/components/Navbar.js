import React from "react";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div>

      <div className="md:hidden   justify-center  h-[74px] ">
        <ul className="flex flex-row gap-10 ml-[625px] xl:ml-[499px] lg:ml-[296px]  items-center mt-[23px] ">
          <li>
            <a className=" text-[16px] font-Rubik text-[#90E051] font-bold ">Home</a>
          </li>
          <li>
            <a className=" text-[16px] font-Rubik font-bold ">Menu</a>
          </li>
          <li>
            <a className=" text-[16px] font-Rubik font-bold ">About</a>
          </li>
          <li>
            <a className=" text-[16px] font-Rubik font-bold ">Shop</a>
          </li>
          <li><a><img src="MagnifyingGlass.png" className="w-[20px] h-[20px] ml-[380px] xl:ml-[262px] lg:ml-[201px]" /></a></li>
          <li><a><img src="User.png" className="w-[20px] h-[20px]"/></a></li>
          <li><a><img src="Tote.png" className="w-[20px] h-[20px]"/></a></li>
        </ul>
      </div>

      <div className="hidden md:block w-[40px] h-[40px] ml-[23px] mt-[23px]">
       <Menu/>
      </div>

      </div>

  );
}
