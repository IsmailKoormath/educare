"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logoIcon from "../../../public/images/marqueelogo.svg"; 

const MarqueeText = () => {
  const texts = [
    "Education is the foundation of greatness; let’s build it together",
    "Learning today, leading tomorrow – the Educare way",
    "Turning dreams into achievement",
  ];

  return (
    <div className="bg-[#FFF3E1] py-2 my-4">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {texts.map((text, index) => (
          <div
            key={index}
            className="flex items-center mx-8 py-2 text-[#8A1538] font-medium  text-xl whitespace-nowrap"
          >
            <span>{text}</span>
            <Image
              src={logoIcon}
              alt="icon"
              width={20}
              height={20}
              className="mx-4"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeText;
