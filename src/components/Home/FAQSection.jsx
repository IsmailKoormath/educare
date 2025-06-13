'use client';

import React, { useState } from 'react';

const faqs = [
    {
        question: 'What subjects do you offer tutoring in?',
        answer:
            'We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.',
    },
    {
        question: 'What ages or grade levels do you tutor?',
        answer:
            'We provide tutoring for students from elementary school through high school, and also offer help for college-level coursework depending on the subject.',
    },
    {
        question: 'Is tutoring one-on-one or in groups?',
        answer:
            'Our tutoring is primarily one-on-one to ensure personalized attention, but group sessions are also available upon request.',
    },
    {
        question: 'Can sessions take place at our home?',
        answer:
            'Yes, we offer in-home tutoring as well as virtual sessions to accommodate your convenience.',
    },
    {
        question: 'What is the duration and frequency of each tutoring session?',
        answer:
            'Typical sessions are 1 hour long and occur 1-3 times per week depending on the student’s needs and goals.',
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="bg-[#f9f6f2] py-16">
            <div className="w-full mx-auto px-10 sm:px-20 md:px-40">
                <h2 className="text-3xl font-medium text-center text-[#534a39] mb-10">
                    Frequently asked <span className="font-bold">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-md shadow-sm border border-gray-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-[#534a39] focus:outline-none"
                                >
                                    <span className="flex-1 text-left">{faq.question}</span>
                                    <span
                                        className={`w-2 h-2 border-t-2 border-r-2 border-[#534a39] transform transition-transform duration-300 ml-4 ${isOpen ? 'rotate-[-45deg]' : 'rotate-135'
                                            }`}
                                    ></span>
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-5 text-[#534a39] text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
