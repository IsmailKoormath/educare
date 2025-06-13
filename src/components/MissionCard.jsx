import React from 'react';
import Image from 'next/image';

const MissionCard = ({title,image,content}) => {
    return (
        <div className="relative bg-educare-light-beige rounded-2xl p-6 w-[460px] sm:h-[170px] max-w-lg mx-auto shadow-lg overflow-visible bg-[#FFF3E1] hover:shadow-[4px_4px_0px_0px_#8A1538] hover:-mt-1">
            <div className="z-10 relative text-[#8A1538]"> 
                <h2 className="text-xl font-bold text-educare-primary mb-4">
                    {title}
                </h2>
                <p className=" text-educare-primary leading-relaxed w-[85%]">{content}
                </p>
            </div>

            <div className="absolute -top-12 -right-5  z-20">
                <Image
                    src={image}
                    alt="Illustration of a hand holding a flag"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    priority
                />
            </div>
        </div>
    );
};

export default MissionCard;