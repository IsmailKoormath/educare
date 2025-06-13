import React from 'react'
import Hero from '@/components/Home/Hero';
import FeatureHighlights from '@/components/Home/FeatureHighlights';
import StoryofEducare from '@/components/Home/StoryofEducare';
import Ourway from '@/components/Home/Ourway';
import Programs from '@/components/Home/Programs';
import WorldMap from '@/components/Home/WorldMap';
import MarqueeText from '@/components/Home/MarqueeText';
import Subjects from '@/components/Home/Subjects';
import VideoSpace from '@/components/Home/VideoSpace';
import ExamCoursesSection from '@/components/Home/ExamCoursesSection';
import TestimonialSection from '@/components/Home/TestimonialSection';
import FAQSection from '@/components/Home/FAQSection';
import Blog from '@/components/Home/Blog';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <StoryofEducare/>
      <Ourway/>
      <Programs />
      <Subjects />
      <WorldMap />
      <MarqueeText/>
      <VideoSpace/>
      <ExamCoursesSection/>
      <TestimonialSection/>
      <FAQSection/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default HomePage