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
import SectionHeader from '../SectionHeader';

const Programs = () => {
    const programs = [
        { title: "English Grammar", content: 'Master the building blocks of writing and communication.', image: grammarImg },
        { title: 'Craft Classes', content: 'Unleash creativity with hands-on projects and artistic fun.', image: craftImg },
        { title: 'Art and Painting', content: 'Express yourself through colors, sketches, and designs', image: artImg },
        { title: 'Craft Classes', content: 'Unleash creativity with hands-on projects and artistic fun.', image: craftImg },

    ];

    return (
        <div className='px-4 md:px-10 py-10 flex flex-col items-center justify-center'>
            <SectionHeader title="Programs we offer" boldtitle="for Kids" />

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    640: { slidesPerView: 1.2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="w-full swiper-programs"
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
