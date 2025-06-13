import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';

const ProgramCard = ({ title, content, image }) => {
    return (
        <div className='my-10 mr-5'>
            <div className=' bg-[#FFF3E1] mt-[40px] rounded-3xl p-6 flex flex-col justify-between relative '>
            <div>
                <h3 className='text-[#8A1538] text-lg font-semibold mb-3'>{title}</h3>
                <p className='text-[#8A1538] text-sm w-[60%] mb-4'>{content}</p>
                <CustomButton text={'Read More'} />
            </div>
            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={150}
                    height={150}
                    className='absolute -top-12 right-2 object-contain'
                />
            )}
        </div>
        </div>
    );
};

export default ProgramCard;
