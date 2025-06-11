'use client';
import React from 'react';
import ProgramCard from '../ProgramCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import images
import grammarImg from '../../../public/images/grammar.png';
import craftImg from '../../../public/images/craft.png';
import artImg from '../../../public/images/art.png';

const Programs = () => {
    const programs = [
        { title: "English Grammar", content: 'Master the building blocks of writing and communication.', image: grammarImg },
        { title: 'Craft Classes', content: 'Unleash creativity with hands-on projects and artistic fun.', image: craftImg },
        { title: 'Art and Painting', content: 'Express yourself through colors, sketches, and designs', image: artImg },
    ];

    return (
        <div className='px-10 py-10 flex flex-col items-center justify-center'>
            <h1 className='text-3xl text-[#655945] mb-6'>Programs we offer <span className='font-bold'>for Kids</span></h1>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                slidesPerView={3}
                loop={true}
                className="swiper-programs h-[230px]"
            > 
                {programs.map((program, index) => (
                    <SwiperSlide key={index}>
                        <ProgramCard
                            title={program.title}
                            content={program.content}
                            image={program.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Programs;
