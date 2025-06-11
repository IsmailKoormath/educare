import Image from 'next/image'
import React from 'react'

const SubjectCard = ({image,subject}) => {
  return (
      <div className='w-[202px] h-[151px] bg-[#FFF3E1] flex flex-col items-center justify-center rounded-lg border border-[#8A15381A] '>
        <Image width={180} src={image} alt='subject' className='rounded-lg'/>
          <span className='text-[#8a1538]' >{subject}</span>
      </div>
  )
}

export default SubjectCard