import Logo from "../assets/logo.png"
import React from 'react'
// react icons
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

import { useState } from 'react';

import {Link} from 'react-scroll'
 


const Navbar = () =>  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        {link: "Overview", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ]

    // to add scrolling effects

  return (     
    <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-xl container flex mx-auto-flex justify-between items-center font-medium'> 

                <div className=' flex space-x-14 items-center'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={Logo} alt="" className='w-10 inline-block items-center'/> <span>LOGO</span>
                    </a>

                    {/* show nav items */}
                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        { 
                            navItems.map(({link,path}) =>  
                            <li key={link}>
                                <Link activeClass='active' spy={true} smooth={true} offset={-100} to={path} className='block hover:text-gray-300'>{link}</Link>
                            </li>)
                        }
                    </ul>     
                </div>

                {/* language and signup */}
                <div className='space-x-12 hidden md:flex items-center'> 
                    <a href="/" className='hidden lg:flex  items-center hover:text-secondary'> <GrLanguage className='mr-2' /> Language</a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo'>Sign Up</button>
                </div>

                {/*  menu btn, only display on mobile*/}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white text-lg focus:outline-none focus:text-gray-300'>
                        {
                        isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>): (<FaBars className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                 </div>

            </div>
        </nav>

        {/*  Mobile Menu */}
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl  ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                navItems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 text-white' onClick={toggleMenu}>{link}</Link>)
            }
        </div>
    </>
  );
}

export default Navbar