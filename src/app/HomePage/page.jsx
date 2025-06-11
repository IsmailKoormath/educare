import React from 'react'
import Hero from '@/components/Home/Hero';
import FeatureHighlights from '@/components/Home/FeatureHighlights';
import StoryofEducare from '@/components/Home/StoryofEducare';
import Ourway from '@/components/Home/Ourway';
import Programs from '@/components/Home/Programs';
import WorldMap from '@/components/Home/WorldMap';
import MarqueeText from '@/components/Home/MarqueeText';
import Subjects from '@/components/Home/Subjects';

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
    </div>
  )
}

export default HomePage