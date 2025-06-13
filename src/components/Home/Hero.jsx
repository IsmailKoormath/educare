'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import bg from "../../../public/images/hero_bg.png";
import leftimg from "../../../public/images/hero_img.png";
import rightimg from "../../../public/images/hero_img2.png";
import whatsapp from '../../../public/images/whatsapp.png'
import Header from '../Header';

const Hero = () => {

    const curriculumLogos = [
        { src: '/images/curriculum 1.png', alt: 'SABIS Logo' },
        { src: '/images/curriculum 2.png', alt: 'SABIS Logo' },
        { src: '/images/curriculum 3.png', alt: 'SABIS Logo' },
        { src: '/images/curriculum 1.png', alt: 'SABIS Logo' },
        { src: '/images/curriculum 2.png', alt: 'SABIS Logo' },
        { src: '/images/curriculum 3.png', alt: 'SABIS Logo' },

    ];

    return (
        <section
            className="relative w-full min-h-screen bg-educare-bg-light overflow-hidden flex flex-col "
            style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Header />
            <div className=" absolute top-55 left-0 w-[40%] sm:w-[35%]  z-10 hidden sm:block animate-[float-up-down_3s_ease-in-out_infinite]">
                <Image
                    src={leftimg}
                    alt="Two women discussing"
                    layout="responsive"
                    objectFit="contain"
                    priority
                />
            </div>

            <div className="absolute top-55 right-0 w-[40%] sm:w-[35%]   z-10 hidden sm:block animate-[float-up-down_3.5s_ease-in-out_infinite]">
                <Image
                    src={rightimg}
                    alt="Two men and a child celebrating with a trophy"
                    layout="responsive"
                    objectFit="contain"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col gap-10 items-center justify-center pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20 flex-grow">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    centeredSlides={true}
                    className="w-full max-w-3xl text-center mb-8 swiper-headline"
                >

                    <SwiperSlide>
                        <h1 className="text-3xl sm:text-5xl font-semibold font-bricolage text-[#8A1538] leading-tight px-4 transition-all duration-700">
                            Master IELTS, TOEFL, and
                        </h1>
                        <h2 className="text-2xl sm:text-4xl font-light font-bricolage text-[#8A1538] leading-tight px-4 transition-all duration-700">Beyond with Expert Guidance!</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="text-3xl sm:text-5xl font-semibold font-bricolage text-[#8A1538] leading-tight px-4 transition-all duration-700">
                            Personalized One-to-One
                        </h1>
                        <h2 className="text-2xl sm:text-4xl font-light font-bricolage text-[#8A1538] leading-tight px-4 transition-all duration-700">Tutoring at Our Center</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="text-3xl sm:text-5xl font-semibold font-bricolage text-[#8A1538] leading-tight px-4 transition-all duration-700">
                            Individual Tuition,
                        </h1>
                        <h2 className="text-2xl sm:text-4xl font-light font-bricolage text-[#8A1538] leading-tight px-4 transition-all duration-700"> For all students till 12th grade!</h2>
                    </SwiperSlide>

                </Swiper>

                <div className="relative flex flex-col items-center">
                    <div className="absolute inset-0 translate-x-0 translate-y-0 bg-[#EBC48B] rounded-md -z-10 sm:px-4 sm:py-2"></div>
                    <Link href="/demo-class">
                        <button className="relative px-2 text-sm py-1 sm:px-4 sm:py-2 text-white  font-light bg-[#8A1538] rounded-md shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 ease-in-out">
                            Book a Free Demo Class
                            <span className="inline-block text-xl ml-2">↗</span>
                        </button>
                    </Link>
                </div>

                <p className="text-lg md:text-xl text-educare-text-light  mb-2 text-[#8A1538]">Curriculums we offer:</p>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    watchSlidesProgress={true} slidesPerView={3}
                    loop={true}
                    spaceBetween={10}
                    className="mySwiper flex flex-wrap justify-center items-center  max-w-lg "
                >
                    {curriculumLogos.map((logo, index) => (
                        <SwiperSlide key={index} width={100}>
                            <Image
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={80}
                                className="h-12 object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed top-1/4 right-4 transform -translate-y-1/2 bg-whatsapp-green hover:bg-green-600/30  text-white p-1 rounded-full shadow-xs  z-50 flex items-center justify-center transition duration-300 ease-in-out group"
                aria-label="Chat on WhatsApp"
            >
                <Image width={70}  src={whatsapp} alt='whatsappicon'/>

            </a>
            <Link href="/demo-class"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed top-1/2 -right-18 text-sm rotate-90  bg-[#8A1538]  text-white py-1 px-2 rounded-sm  z-50 flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                Book a Free Demo Class

            </Link>

            
        </section>
    );
};

export default Hero;