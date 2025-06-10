import React from 'react'
import Logo from '../../public/images/logo.svg'
import phone from '../../public/images/PhoneDisconnect.svg'
import mail from '../../public/images/Envelope.svg'
import Image from 'next/image'
import ContactButton from './ContactButton'

const Header = () => {
    return (
        <div className='w-full h-[75px] bg-[#8A1538] flex items-center justify-around'><Image src={Logo} alt="Logo" />
            <ul className='flex gap-4 cursor-pointer text-sm'>
                <li>About us</li>
                <li>Courses</li>
                <li>Careers</li>
                <li>News & Blogs</li>
                <li>Payments</li>
            </ul>
            <ul className='text-sm flex flex-col gap-2'><li className='flex gap-2'><Image src={phone} alt="phone" />  +974 55555 3456</li>
                <li className='flex gap-2'><Image src={mail} alt="phone" /> info@educare.qa</li>
            </ul>
            <ContactButton />
        </div>
    )
}

export default Header