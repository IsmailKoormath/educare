import React from 'react'
import arrow from '../../public/images/ArrowUpRight.svg'
import Image from 'next/image'
const CustomButton = ({text}) => {
  return (
        <div className="relative ">
          <div className="absolute inset-0 translate-x-0 translate-y-0 bg-[#EBC48B] rounded-md w-[120px] h-[35px]"></div>
          <button className="relative w-[120px] h-[35px] text-white text-sm font-light bg-[#8A1538] rounded-md shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-300 ease-in-out">
              {text}
              <span className="inline-block ml-2 -mb-1"><Image src={arrow} alt='arrow'/></span>
            </button>
        </div>
    )
}

export default CustomButton