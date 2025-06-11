import React from 'react'
import Hero from '@/components/Home/Hero';
import FeatureHighlights from '@/components/Home/FeatureHighlights';
import StoryofEducare from '@/components/Home/StoryofEducare';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <StoryofEducare/>
    </div>
  )
}

export default HomePage