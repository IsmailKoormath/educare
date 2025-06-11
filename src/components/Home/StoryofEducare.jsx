'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import frame1 from '../../../public/images/frame1.png'
import frame2 from '../../../public/images/frame2.png'
import storyPhoto1 from '../../../public/images/story1.png';
import storyPhoto2 from '../../../public/images/story2.png';
import useImageCarousel from '@/hooks/useImageCarousel';
import CustomButton from '../CustomButton';
import MissionCard from '../MissionCard';
import mission from '../../../public/images/mission.png'
import vission from '../../../public/images/vission.png'
import vectorArrow from '../../../public/images/vector.png'

const rotatingImagesSet1 = [
    storyPhoto1,
    storyPhoto1,
];
const rotatingImagesSet2 = [
    storyPhoto2,
    storyPhoto2,
];
const StoryofEducare = () => {
    const currentImageSrc1 = useImageCarousel(rotatingImagesSet1, 2000); // First carousel
    const currentImageSrc2 = useImageCarousel(rotatingImagesSet2, 2000);

    return (
        <div className=' min-h-screen mt-20 px-10'><div className='text-[#655945] flex items-center justify-evenly px-10'><div className='flex flex-col gap-4 md:w-[60%]  sm:ml-10'><h2 className='font-semibold text-4xl'>The Story of <span className='font-bold'>Educare</span></h2>
            <p className=' mb-2 leading-relaxed'>
                At <span className='font-bold'>Educare</span> education center, we believe that every student deserves personalized, focused attention to reach their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs, strengths, and learning styles.
            </p>

            <p className=' mb-2 leading-relaxed'>
                Founded on a passion for education and a commitment to excellence, <span className='font-bold'>Educare</span> education center was established to offer students a supportive and engaging learning environment. Our team of experienced tutors is dedicated to helping students excel academically while also building confidence, independence, and a love for learning.
            </p>

            <p className=' leading-relaxed mb-4'>
                We specialize in a wide range of subjects across all grade levels, including math, science, English, and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific exam, we are here to support their journey.
            </p>
            <CustomButton /></div>
            <div className='relative hidden md:flex items-center justify-center md:visible'>
                <div className='relative -top-20 left-10'><Image width={250} height={350} src={frame1} /> <Image
                    src={currentImageSrc1}
                    alt={`Story Image 1`}
                    width={200}
                    height={250}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg z-0 transition-opacity duration-500 ease-in-out opacity-0"
                /></div>
                <div className='relative top-26 right-20'><Image className=' ' width={300} height={350} src={frame2} /><Image
                    src={currentImageSrc2}
                    alt={`Story Image 2`}
                    width={240}
                    height={270}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg z-1 transition-opacity duration-500 ease-in-out opacity-0"
                /></div>
            </div>
        </div>
            <div className='flex  md:w-[80%] gap-4 flex-wrap mt-10 ml-10'>
                <MissionCard title={"Mission"} image={mission} content={'To help students succeed with personalized, one-to-one tutoring that builds confidence, skills, and a love for learning.'} />
                <MissionCard title={"Vission"} image={vission} content={'To be a trusted center where students reach their potential, build confidence, and prepare for a bright future.'} />
                <Image
                    height={100}
                    width={120}
                    className="hidden lg:flex"
                    src={vectorArrow}
                    alt="arrow"
                />

            </div>
        </div>
    )
}

export default StoryofEducare