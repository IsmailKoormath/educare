'use client';

import React from 'react'
import SubjectCard from '../SubjectCard'
import physicsimg from '../../../public/images/subjects/physics.png'
import chemistryimg from '../../../public/images/subjects/physics.png'
import mathsimg from '../../../public/images/subjects/maths.png'
import science from '../../../public/images/subjects/computer science.png'
import english from '../../../public/images/subjects/english.png'
import biology from '../../../public/images/subjects/biology.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

const Subjects = () => {
   const items = [
        { img: mathsimg, content:'Maths'},
        { img: physicsimg, content:'Physics'},
        { img: chemistryimg, content:'Chemistry'},
        { img: biology, content:'Biology'},
        { img: science, content:'Computer Science'},
        { img: english, content:'English'}
    ]
    return (
        <div className='bg-[#F9F7F4] px-10 py-10  flex flex-col items-center justify-center'>
            <h2 className='text-[#655945] text-3xl mb-10'>Subject we <span className='font-bold'>Teach</span></h2>

            <Swiper
                modules={[ Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                slidesPerView={6}
                loop={true}
                className="swiper-programs h-[230px] w-full"
            >
                {items.map((item,index) => (
                    <SwiperSlide key={index}>
                        <SubjectCard image={item.img} subject={item.content} />
                    </SwiperSlide>
                ))}
            </Swiper>
              
        </div>
    )
}

export default Subjects