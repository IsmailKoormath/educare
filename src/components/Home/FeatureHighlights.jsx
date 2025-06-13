import React from 'react';

import PersonalAttentionIcon from '../../../public/images/Features/UserFocus.svg'
import GrowthMindsetIcon from '../../../public/images/Features/Student.svg'
import SkillDevelopmentIcon from '../../../public/images/Features/Trophy.svg'
import PassionateTeachingIcon from '../../../public/images/Features/HandHeart.svg'
import Image from 'next/image';


const features = [
    { icon: PersonalAttentionIcon, text: 'Personal Attention' },
    { icon: SkillDevelopmentIcon, text: 'Skill Development' },
    { icon: GrowthMindsetIcon, text: 'Growth Mindset' },
    { icon: PassionateTeachingIcon, text: 'Passionate Teaching' },
  ];

const FeatureHighlights = () => {
    return (
        <section className="bg-educare-light-beige py-4 bg-[#FFF3E1]  border-t border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-wrap justify-center md:justify-around items-center text-educare-primary text-center text-[#8A1538]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                flex gap-1 items-center p-4 flex-1 min-w-[200px] max-w-[250px] 
                ${index < features.length - 1 ? 'md:border-r border-[#8A1538]' : ''}
                ${index % 2 === 0 && index < features.length - 2 ? 'border-b border-[#8A1538] md:border-b-0' : ''}
                ${index % 2 === 1 && index < features.length - 1 ? 'border-b border-[#8A1538]  md:border-b-0' : ''}
                md:px-6 md:py-2 lg:px-8 
              `} 
                        >
                            <Image src={feature.icon} alt='icons' className='w-8'/>
                            <p className="text-sm inline font-medium ">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlights;