import React from "react";

export default function News() {
  return (
    <div className=" bg-red-900 h-[118px] w-[1052px] ">
    <div className="flex flex-row gap-[112px] mt-[23px]">
      <h1>Subscribe To Our Newsletter</h1>
      <div className="flex flex-row">
      <input placeholder="Enter the mail"/>
      <a>Subscribe now</a>
      </div>
      <div className="flex flex-row gap-[15px]">
        <img src="icon.png"/>
        <img src="icon (1).png"/>
        <img src="icon (2).png"/>
        <img src="icon (3).png"/>
      </div>
    </div>
    </div>
  );
}
