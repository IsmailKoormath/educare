import React from 'react';
import Image from 'next/image';
import quoteIconImage from '../../public/images/quote-mark.svg';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <svg
                key={i}
                className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                viewBox="0 0 24 24"
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z" />
            </svg>
        );
    }
    return <div className="flex space-x-1 mb-2">{stars}</div>;
};

const TestimonialCard = ({ profileImage, testimonial, rating, reviewerName, reviewerProfession }) => {
    return (
        <div className=' w-[400px] pt-20'>

        <div className="bg-white rounded-[2rem] px-6 pt-[3.5rem] pb-6 relative  border border-gray-200 shadow-sm flex flex-col">

            <div className="absolute top-0 left-6 transform -translate-y-1/2 z-20">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src={profileImage}
                            alt={reviewerName}
                            fill
                            className="object-cover"
                            sizes=" 80px"
                            priority={false}
                        />
                    </div>
            </div>

            <div className="absolute top-0 right-6 transform -translate-y-1/2 z-20">
                    <Image
                        src={quoteIconImage}
                        alt="Quote mark icon"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                    />
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-3 z-10 text-left">
                &quot;{testimonial}&quot;
            </p>

            <div className="flex justify-between items-center z-10">
                <StarRating rating={rating} />
                <div className="text-right flex flex-col items-end">
                        <p className="text-base text-[#8A1538] font-semibold text-educare-primary">{reviewerName}</p>
                    <p className="text-sm text-gray-500">{reviewerProfession}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TestimonialCard;
