'use client';

import React from 'react';
import SubjectCard from '../SubjectCard';
import physicsimg from '../../../public/images/subjects/physics.png';
import chemistryimg from '../../../public/images/subjects/physics.png';
import mathsimg from '../../../public/images/subjects/maths.png';
import science from '../../../public/images/subjects/computer science.png';
import english from '../../../public/images/subjects/english.png';
import biology from '../../../public/images/subjects/biology.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionHeader from '../SectionHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Subjects = () => {
    const items = [
        { img: mathsimg, content: 'Maths' },
        { img: physicsimg, content: 'Physics' },
        { img: chemistryimg, content: 'Chemistry' },
        { img: biology, content: 'Biology' },
        { img: science, content: 'Computer Science' },
        { img: english, content: 'English' },
        { img: chemistryimg, content: 'Chemistry' },

    ];

    return (
        <div className='bg-[#F9F7F4] px-4 pb-6 md:px-10 pt-10 mb-14 flex flex-col gap-6 items-center justify-center'>
            <SectionHeader title="Subjects we" boldtitle="Teach" />

            <div className="relative w-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 16 },
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 24 },
                        1280: { slidesPerView: 6, spaceBetween: 32 },
                    }}
                    loop={true}
                    spaceBetween={10}
                    className="swiper-subjects w-full"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SubjectCard image={item.img} subject={item.content} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Subjects;
