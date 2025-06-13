import React from 'react'
import CustomButton from '../CustomButton'
import BlogCard from '../BlogCard'

import blog1 from '../../../public/images/blog1.png'
import blog2 from '../../../public/images/blog2.png'
import blog3 from '../../../public/images/blog3.png'
import blog4 from '../../../public/images/blog4.png'

const blogs=[
    { image: blog1,title: 'Top tips for effective home tutoring', description:'Share practical advice on how students can make the most out of tutoring sessions.'},
    { image: blog2, title: 'Building a productive study environment', description:'Share practical advice on how students can make the most out of tutoring sessions.'},
    { image: blog3, title: '5 Skills every great tutor should have', description:'Outline essential skills for tutors, such as patience, adaptability, subject knowledge.'},
    { image: blog4, title: 'Getting the best individual tuition ', description:'Share practical advice on how students can make the most out of tutoring sessions.'}
]

const Blog = () => {
  return (
    <div className='px-10 sm:px-20 md:px-30 py-20'>
          <div className='flex justify-between'><h2 className='text-3xl text-[#655945]'>Our Latest <span className='font-bold'>Blog Posts</span></h2>
          <CustomButton text={'View All'}/></div>
          <div className='flex flex-wrap mt-10 items-center justify-center gap-6'>
              {blogs.map((blog,index)=>(
                  <BlogCard blogImg={blog.image} title={blog.title} key={index} description={blog.description} />

              ))}
            </div>
    </div>

  )
}

export default Blog