import React from 'react';
import Image from 'next/image';

const CourseCard = ({ imageSrc, title, description }) => {
    return (
        <div className='relative my-2.5 group'>
            <div className="bg-[#FFF3E1] z-10 rounded-4xl overflow-hidden border border-gray-200 cursor-pointer w-[310px] p-2
                  transition-transform duration-300 ease-in-out "> 
                <div className="relative h-32 overflow-hidden rounded-3xl">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover w-full"
                        priority={false}
                    />
                </div>

                <div className="p-4 ">
                    <h3 className="text-xl text-[#8A1538] mb-2">
                        {title}
                    </h3>
                    <p className="text-[12px] text-[#655945]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="absolute -z-10 bg-[#8A1538] rounded-4xl overflow-hidden w-[310px] h-full top-0 cursor-pointer p-2
                  transform rotate-4 transition-transform duration-300 ease-in-out
                  group-hover:rotate-0">
                
            </div>
        </div>
    );
};

export default CourseCard;