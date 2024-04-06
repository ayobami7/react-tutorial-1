import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Logo from "../assets/logo.png"

const Footer= () => {

    const getDate = () => {
         currentYear = new Date().getFullYear();
    }

  return (
    <div className='bg-[#071497] md:px-14 p-4 max-w-screen-2xl mx-auto '>
        <div className='my-12 flex flex-col md:flex-row justify-between '>
            <div>
                <div className='md:w-1/2 space-y-8'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-white'>
                            <img src={Logo} alt="logo" className='w-10 inline-block items-center'/> <span>LOGO</span>
                </a>
                <p className=' text-tertiary'>
                Ser el aliado estratégico más confiable y seguro para sus operaciones de nuestros clientes; 
                </p>
                </div>
                <div className='h-4'></div>
                <div>
                    <input type="email" name='email' placeholder='Your email' id='email' 
                    className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                    <input type="submit" value="Subscribe" 
                    className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all'/>
                </div>
            </div>

            {/* footer nav items */}
            <div className='text-white md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start' >
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/" className='block hover:text-gray-300'>Features</a>
                        <a href="/" className='block hover:text-gray-300'>About </a>
                        <a href="/" className='block hover:text-gray-300'>Pricing</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Help</h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>How does it work?</a>
                        <a href="/" className='block hover:text-gray-300'>Where to ask question?</a>
                        <a href="/" className='block hover:text-gray-300'>How to pay? </a>
                        <a href="/" className='block hover:text-gray-300'>What is needed?</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'> 
                    <h4 className='text-xl'>Contact</h4>
                    <ul className='space-y-3'>
                        <a className='block hover:text-gray-300'>[234] 8198003819</a>
                        <a className='block hover:text-gray-300'> 41,Block A </a>
                        <a className='block hover:text-gray-300'>Lagos </a>
                        <a className='block hover:text-gray-300'>Nigeria</a>
                    </ul>
                </div>
            </div>
        </div>

        <hr />
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-2 text-gray-300'>
            <p>@ LOGO<span>{getDate.currentYear}</span>. All rights reserved.</p>
            <div className='flex items-center space-x-5 text-gray-300'>
                <FaFacebook className='w-8 cursor-pointer hover:-translate-y-1 transition-allduration-300'/>
                <FaInstagram className='w-8 cursor-pointer hover:-translate-y-1 transition-allduration-300'/>
                <FaTwitter className='w-8 cursor-pointer hover:-translate-y-1 transition-allduration-300'/>
                <FaLinkedin className='w-8 cursor-pointer hover:-translate-y-1 transition-allduration-300'/>
            </div>
        </div>
    </div>
  )
}

export default Footer