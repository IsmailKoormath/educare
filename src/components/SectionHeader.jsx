import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton'; 

const SectionHeader = ({ title, boldtitle, buttonLink = '#', buttonText = 'View All' }) => {
    return (
        <div className="relative w-full mb-8 px-4 md:px-0">
            <div className="absolute top-0 right-0 z-10 sm:mr-8">
                <Link href={buttonLink}>
                    <CustomButton text={buttonText} />
                </Link>
            </div>

            <h2 className='text-2xl sm:text-3xl text-center text-[#655945]'>
                {title} <span className='font-bold '>{boldtitle}</span>
            </h2>
        </div>
    );
};

export default SectionHeader;