'use client'
import React, { useState } from 'react'
import Logo from '../../public/images/logo.svg'
import phone from '../../public/images/PhoneDisconnect.svg'
import mail from '../../public/images/Envelope.svg'
import Image from 'next/image'
import ContactButton from './ContactButton'

const Header = () => {
    const [showCoursesMenu, setShowCoursesMenu] = useState(false)
    const [expandSchoolSubjects, setExpandSchoolSubjects] = useState(false)

    const schoolSubjects = [
        'Math', 'Physics', 'Chemistry', 'Biology', 'English',
        'Arabic', 'Computer Science', 'Civics', 'Geography',
        'Economics', 'History', 'Politics'
    ]

    return (
        <div className='w-full h-[75px] bg-[#8A1538] flex items-center justify-between px-4 md:px-20 fixed z-50'>
            <Image src={Logo} alt="Logo" className="h-8 w-auto" />

            <ul className='hidden md:flex gap-6 text-sm text-white relative'>
                <li >About us</li>

                {/* Courses Dropdown */}
                <li className='relative'>
                    <span
                        className='cursor-pointer'
                        onClick={() => {
                            setShowCoursesMenu(!showCoursesMenu)
                            setExpandSchoolSubjects(false)
                        }}
                    >
                        Courses ▾
                    </span>

                    {showCoursesMenu && (
                        <div className='absolute top-full mt-2 left-0 flex bg-[#FFF3E1] text-black shadow-lg z-50 rounded overflow-hidden'>
                            {/* Left Column: Categories */}
                            <div className='w-48 border-r'>
                                <div
                                    onClick={() => setExpandSchoolSubjects(true)}
                                    className={`px-4 py-2 cursor-pointer  ${expandSchoolSubjects ? 'bg-[#8A1538] text-white' : ''}`}
                                >
                                    For School Students
                                </div>
                                <div className='px-4 py-2 cursor-pointer hover:bg-gray-100'>
                                    For kids
                                </div>
                                <div className='px-4 py-2 cursor-pointer hover:bg-gray-100'>
                                    Other
                                </div>
                            </div>

                            {/* Right Column: Subjects */}
                            {expandSchoolSubjects && (
                                <div className='w-64 bg-[#FFF3E1]'>
                                    {schoolSubjects.map(subject => (
                                        <div
                                            key={subject}
                                            className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                                        >
                                            {subject}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </li>

                <li >Careers</li>
                <li >News & Blogs</li>
                <li >Payments</li>
            </ul>
            <div className='flex gap-8'>

                <ul className='hidden lg:flex text-sm flex-col gap-1 text-white'>
                    <li className='flex items-center gap-2'>
                        <Image src={phone} alt="phone" /> +974 55555 3456
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src={mail} alt="mail" /> info@educare.qa
                    </li>
                </ul>

                <ContactButton />
            </div>
        </div>
    )
}

export default Header
