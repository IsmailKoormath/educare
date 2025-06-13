'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import CourseCard from '../CourseCard';
import SectionHeader from '../SectionHeader';

import ieltsImage from '../../../public/images/exams/ielts-prep.png';
import toeflImage from '../../../public/images/exams/toefl-mastery.png';
import pteImage from '../../../public/images/exams/pte-academic.png';
import cambridgeImage from '../../../public/images/exams/cambridge-english.png';

const courses = [
    {
        id: 1,
        imageSrc: ieltsImage,
        title: 'IELTS Preparation',
        description: 'Focus on all four sections: Listening, Reading, Writing, and Speaking.',
    },
    {
        id: 2,
        imageSrc: toeflImage,
        title: 'TOEFL Mastery',
        description: 'Comprehensive coverage of Reading, Listening, Speaking and Writing sections.',
    },
    {
        id: 3,
        imageSrc: pteImage,
        title: 'PTE Academic Course',
        description: 'Time-saving strategies and practice tests with instant feedback.',
    },
    {
        id: 4,
        imageSrc: cambridgeImage,
        title: 'Cambridge English (CAE)',
        description: 'Preparation for high-level English skills in Listening, Speaking, Reading and Writing.',
    },
    {
        id: 5,
        imageSrc: toeflImage,
        title: 'TOEFL Mastery',
        description: 'Comprehensive coverage of Reading, Listening, Speaking and Writing sections.',
    },
];

const ExamCoursesSection = () => {
    return (
        <section className="bg-[#F9F7F4] py-16 px-4 md:px-10">
            <div className="w-full max-w-[1400px] mx-auto">
                <SectionHeader title="Master in" boldtitle="IELTS, TOEFL Exams" />

                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1.2, spaceBetween: 10 },
                        480: { slidesPerView: 1.5, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1280: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    className="exam-courses-swiper pb-12"
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <CourseCard
                                imageSrc={course.imageSrc}
                                title={course.title}
                                description={course.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ExamCoursesSection;
