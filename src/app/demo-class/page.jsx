'use client';

import React, { useState } from 'react'; 
import FormField from '../../components/forms/FormField'; 
import SelectField from '../../components/forms/SelectField'; 

const curriculumOptions = [
    { value: 'ielts', label: 'IELTS' },
    { value: 'toefl', label: 'TOEFL' },
    { value: 'pte', label: 'PTE Academic' },
    { value: 'cambridge', label: 'Cambridge English (CAE)' },
    { value: 'other', label: 'Other' },
];

const classOptions = [
    { value: 'grade-1', label: 'Grade 1' },
    { value: 'grade-2', label: 'Grade 2' },
    { value: 'grade-10', label: 'Grade 10' },
    { value: 'grade-12', label: 'Grade 12' },
    { value: 'university', label: 'University' },
];

const courseOptions = [
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English' },
    { value: 'test-prep', label: 'Test Preparation' },
];

 const metadata  = {
    title: 'Book a Free Demo Class',
    description: 'Fill out this form to book your free demo class with Educare.',
};

export default function DemoClassPage() { 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        curriculum: '',
        class: '',
        course: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your submission! We will connect with you shortly.'); 
        setFormData({
            name: '',
            email: '',
            curriculum: '',
            class: '',
            course: '',
            message: '',
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div
                className="max-w-xl w-full bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl" 
            >

                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#655945] mb-2">Book a Free Demo Class</h1>
                    <p className="text-[#655945] text-base md:text-lg">Fill up this form and we will connect you shortly</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <FormField
                        id="name"
                        label="Name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        isRequired={true}
                    />
                    <FormField
                        id="email"
                        label="Email ID"
                        type="email"
                        placeholder="Your Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired={true}
                    />
                    <SelectField
                        id="curriculum"
                        label="Choose your curriculum syllabus"
                        value={formData.curriculum}
                        onChange={handleChange}
                        options={curriculumOptions}
                        isRequired={true}
                    />
                    <SelectField
                        id="class"
                        label="Choose your class"
                        value={formData.class}
                        onChange={handleChange}
                        options={classOptions}
                        isRequired={true}
                    />
                    <SelectField
                        id="course"
                        label="Choose your course"
                        value={formData.course}
                        onChange={handleChange}
                        options={courseOptions}
                        isRequired={true}
                    />
                    <FormField
                        id="message"
                        label="Write your Message"
                        type="textarea"
                        placeholder="Enter your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                    />

                    <button
                        type="submit"
                        className="w-full bg-educare-primary bg-[#8A1538] text-white text-sm py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};