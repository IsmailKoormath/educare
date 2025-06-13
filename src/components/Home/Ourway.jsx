'use client';
import Image from 'next/image'
import React from 'react'
import teaching from '../../../public/images/teaching.png'
import teaching2 from '../../../public/images/teaching2.png'
import useImageCarousel from '../../hooks/useImageCarousel';

const rotatingImages = [
    teaching,
    teaching2,
];
const Ourway = () => {
    const { currentImage, isFading } = useImageCarousel(rotatingImages, 3000);
    return (
        <div className='flex  flex-wrap lg:flex-nowrap px-8 sm:px-28 py-10 gap-10 bg-[#F9F7F4] text-[#655945]'>
            <div className='md:w-[40%]'>
                <h2 className='font-semibold text-3xl mb-4 sm:mb-10'>Our way of <span className='font-bold'>Teaching</span></h2>
                <ul className='list-disc list-inside flex flex-col gap-6'>
                    <li>Every teacher at Educare brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.</li>
                    <li> We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.</li>
                    <li>Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively</li>
                </ul>
            </div>
            <Image
                src={currentImage}
                alt="teaching"
                className={`transition-opacity duration-500   ease-in-out ${isFading ? 'opacity-5' : 'opacity-100'}`}
            />
        </div>
    )
}

export default Ourway