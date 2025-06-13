import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../../public/images/logo.svg'
import map from '../../public/images/dotmap.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="bg-[#891639] text-white py-10 px-5 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <Image className='mb-auto' src={logo} alt='logo' />
                <div>
                    <h3 className="font-semibold text-lg mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/curriculum">Curriculum</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                        <li><Link href="/contact">Contact us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Contact info</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="mailto:educare@gmail.com" className="hover:underline">educare@gmail.com</a></li>
                        <li><a href="mailto:info@educare.com" className="hover:underline">info@educare.com</a></li>
                        <li><a href="tel:+97444123456" className="hover:underline">+974 4412 3456</a></li>
                        <li><a href="tel:+97455347890" className="hover:underline">+974 5534 7890</a></li>
                    </ul>

                    <div className="flex space-x-4 mt-4 text-lg">
                        <FaInstagram className="cursor-pointer hover:text-gray-300" />
                        <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                        <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
                        <FaYoutube className="cursor-pointer hover:text-gray-300" />
                    </div>
                </div>

                <div className='flex gap-8'>
                        <Image height={90} width={100} src={map} alt='dotmap' />
                    <div>

                        <h3 className="font-semibold text-lg mb-4">Office Address</h3>
                        <p className="text-sm leading-relaxed">
                            Educare Education Center<br />
                            Building 45, Al Sadd Street,<br />
                            Doha, Qatar
                        </p>
                        <Link href="#" className="text-sm underline mt-2 inline-block">View on Map</Link>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-5 flex flex-col md:flex-row justify-between items-center text-xs space-y-2 md:space-y-0">
                <p>© 2024 <Link href="/" className="underline">educare</Link></p>
                <p>Designed By <span className=' text-[#DCC196]'>Novindus Technologies</span></p>
                <div className="flex space-x-4">
                    <Link href="#" className="hover:underline text-[#DCC196]">Terms & Conditions</Link>
                    <Link href="#" className="hover:underline  text-[#DCC196]">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
