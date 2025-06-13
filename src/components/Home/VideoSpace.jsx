import React from 'react'
import teachingImg from '../../../public/images/teachingImg.png'
import youtube from '../../../public/images/youtube.svg'
import Image from 'next/image'
const VideoSpace = () => {
    return (
        <div className='flex flex-col  py-6'>
            <h2 className='text-3xl mb-5 text-center text-[#655945]'>
                Learn More About <span className='font-bold '>Our Space</span>
            </h2>

            <div className='relative w-full max-w-6xl mx-auto'>
                <Image
                    src={teachingImg}
                    alt='teachingImg'
                    className='w-full object-cover'
                />

                <Image
                    src={youtube}
                    alt='youtubeicon'
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16'
                />
            </div>
        </div>
      
    )
}

export default VideoSpace