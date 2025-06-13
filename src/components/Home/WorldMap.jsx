import Image from 'next/image'
import React from 'react'
import mapImg from '../../../public/images/map.png'

const WorldMap = () => {
  return (
    <div className=' flex flex-col items-center justify-center '><h2 className='text-2xl sm:text-3xl mb-10 text-[#655945]'>Prepare Your Child for a <span className='font-bold'>World of Opportunities with Educare</span></h2><Image className='max-w-[85%] py-4' src={mapImg} alt='map'/></div>
  )
}

export default WorldMap