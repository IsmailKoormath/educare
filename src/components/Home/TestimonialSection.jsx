'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TestimonialCard from '../../components/TestimonialCard';

import profile1 from '../../../public/images/profile1.png';
import profile2 from '../../../public/images/profile2.png';
import profile3 from '../../../public/images/profile3.png';

const testimonials = [
    {
        id: 1,
        profileImage: profile1,
        testimonial: 'Best decision for English tutoring! Educare improved our daughter\'s skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!',
        rating: 5,
        reviewerName: 'Sarah H',
        reviewerProfession: 'Accountant',
    },
    {
        id: 2,
        profileImage: profile2,
        testimonial: 'Educare\'s commitment to 1-on-1 learning transformed our son\'s understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!',
        rating: 5,
        reviewerName: 'Ahmed K',
        reviewerProfession: 'Engineer',
    },
    {
        id: 3,
        profileImage: profile3,
        testimonial: 'Choosing Educare was truly beneficial. The personalized approach helped my son overcome his math challenges and sparked a genuine interest in the subject. Highly recommend!',
        rating: 5,
        reviewerName: 'Maria G',
        reviewerProfession: 'Educator',
    },
    {
        id: 4,
        profileImage: profile2,
        testimonial: 'Educare\'s commitment to 1-on-1 learning transformed our son\'s understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!',
        rating: 5,
        reviewerName: 'Ahmed K',
        reviewerProfession: 'Engineer',
    },
];

const TestimonialSection = () => {
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    return (
        <section className="bg-gray-50 py-16 px-3 sm:px-16">
            <div className="container mx-auto px-8 relative ">
                <h2 className="text-2xl sm:text-3xl text-center text-[#655945] mb-12">
                    Hear from our <span className="font-bold">Valuable Parents</span>
                </h2>

                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 1.1, spaceBetween: 16 },
                        768: { slidesPerView: 1.5, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 24 },
                        1280: { slidesPerView: 3, spaceBetween: 32 },
                      }}
                    className="testimonial-swiper "
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>


                
            </div>
        </section>
    );
};

export default TestimonialSection;
