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
                    <div className="absolute inset-0 translate-x-0 translate-y-0 bg-[#EBC48B] rounded-md -z-10 px-4 py-2">Book a Free Demo Class</div>
                    <button className="relative px-4 py-2 text-white  font-light bg-[#8A1538] rounded-md shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 ease-in-out">
                        Book a Free Demo Class
                        <span className="inline-block text-xl ml-2">↗</span>
                    </button>
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
                className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-whatsapp-green hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center transition duration-300 ease-in-out group"
                aria-label="Chat on WhatsApp"
            >
                <svg className="w-8 h-8 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.04 2C7.34 2 3.56 5.78 3.56 10.48c0 1.54.41 3 1.15 4.31L3 21.04l6.59-1.74c1.24.69 2.65 1.08 4.08 1.08 4.71 0 8.49-3.79 8.49-8.49S16.75 2 12.04 2zm3.62 14.54c-.16.27-.92.65-1.27.76-.3.1-.6-.15-1.1-.38-.47-.23-1.46-.9-2.8-2.14-1.33-1.24-2.22-2.73-2.48-3.17-.26-.44-.01-.67.18-.86.17-.18.38-.44.57-.67.19-.23.26-.38.38-.63.12-.26.06-.49-.03-.68-.09-.19-.85-2.06-1.16-2.82-.3-.75-.62-.64-.85-.64-.23 0-.49-.02-.75-.02-.26 0-1 .1-1.54.56-.54.46-2.04 1.99-2.04 4.86 0 2.86 2.11 5.59 2.42 5.96.3.37 4.14 6.3 9.94 6.3 1.43 0 2.4-.4 3.23-.74.83-.34 2.15-1.39 2.51-2.09.36-.7.36-1.29.25-1.49-.1-.2-.38-.3-1.1-.65z" />
                </svg>
            
            </a>

            <Link
                href="#" 
                className="fixed top-1/2 right-0 transform -translate-y-1/2 translate-x-[40%] -rotate-90 origin-bottom-right bg-educare-primary hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-t-lg shadow-lg z-50 whitespace-nowrap hidden md:block transition duration-300 ease-in-out"
                aria-label="Book a Free Demo Class"
            >
                Book a Free Demo Class
            </Link>
        </section>
    );
};

export default Hero;