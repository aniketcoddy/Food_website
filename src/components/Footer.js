import React from 'react'

export default function Footer() {
  return (
    <div>
      <img  src="footer.png" className='mt-[417px]'/>
      <img src="cover.png" className='flex absolute mt-[-498px]'/>
      <div className='flex flex-row gap-[84px] absolute mt-[-309px] ml-[912px]'>
        <ul className=' flex flex-col gap-[10px]'>
            <li className='text-[25px] font-[Rubik] text-[#FFFFFF]'>Explore</li>
            <li className='text-[#FFFFFF] font-[Rubik] '>Home</li>
            <li className='text-[#FFFFFF] font-[Rubik] '>About Us</li>
            <li className='text-[#FFFFFF] font-[Rubik] '>Contact Us</li>
        </ul>

        <ul className=' flex flex-col gap-[10px] mt-[45px]'>
            <li className='text-[#FFFFFF] font-[Rubik] '>Blog</li>
            <li className='text-[#FFFFFF] font-[Rubik] '>Team</li>
            <li className='text-[#FFFFFF] font-[Rubik] '>Our Menu</li>
        </ul>

        <ul className=' flex flex-col gap-[10px]'>
            <li className='text-[25px] font-[Rubik] text-[#FFFFFF]'>Contact Us</li>
            <li className='text-[#FFFFFF] font-[Rubik] '><img src="MapPin.png"/>3rd Floor, Office 45</li>
            <li className='text-[#FFFFFF] font-[Rubik] '><img src="Phone.png"/>7302918014</li>
            <li className='text-[#FFFFFF] font-[Rubik] '><img src="Envelope.png"/>vishnoianiket903@gmail.com</li>
            <li className='text-[#FFFFFF] font-[Rubik] '><img src="Clock.png"/>Sun - Sat / 10:00 AM - 8:00 PM</li>
        </ul>
      </div>
    </div>
  )
}
