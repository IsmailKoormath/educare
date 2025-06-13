import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blogImg, title, description, key }) => {
  return (
      <div key={key} className='w-[290px] h-[300px] flex flex-col gap-4 text-[#655945]'>
        <Image src={blogImg} alt='blogimg'/>
        <h4 className='text-base'>{title}</h4>
          <p className='w-full text-sm text-[#65594599]'>{description}</p>
        </div>
  )
}

export default BlogCard