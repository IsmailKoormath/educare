import React from 'react'
import Hero from '@/components/Home/Hero';
import FeatureHighlights from '@/components/Home/FeatureHighlights';
import StoryofEducare from '@/components/Home/StoryofEducare';
import Ourway from '@/components/Home/Ourway';
import Programs from '@/components/Home/Programs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <StoryofEducare/>
      <Ourway/>
      <Programs />
    </div>
  )
}

export default HomePage