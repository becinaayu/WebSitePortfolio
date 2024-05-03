import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/icon3.jpeg';
import { SlMenu } from "react-icons/sl";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='w-full fixed top-0 left-0 text-PinkTitle shadow-lg flex justify-between lg:justify-around items-center h-24' style={{ backgroundImage: 'linear-gradient(90deg, rgba(247,150,190,0.5) 3%, rgba(198,172,218,0.5) 46%, rgba(165,186,238,0.5) 100%)' }}>

            <a href='' className='flex items-center justify-center'>
                <img className='mx-auto rounded-3xl py-8 md:py-0' src={logo} width={70}/>
                <h1 className='ml-4 uppercase font-black '>Big + 3<br/>FIAP</h1>
            </a>

            <div className='font-semibold text-base lg:text-lg hidden md:block'>
                <ul className='mx-auto flex items-center gap-6 text-rose-700 cursor-pointer'>
                    <li className=''><Link to='/' spy={true} smooth={true} offset={50} duration={50}>Home</Link></li>
                    <li className=''><Link to='about' spy={true} smooth={true} offset={50} duration={50}>About</Link></li>
                    <li className=''><Link to='projects'  spy={true} smooth={true} offset={50} duration={50}>Projects</Link></li>
                    <li className=''><Link to='contact'  spy={true} smooth={true} offset={50} duration={50}>Contact</Link></li>
                </ul>
            </div>

            <div onClick={handleNav} className='block md:hidden text-customSky fixed right-10 top-8 z-50'>
                {nav ? <SlMenu size={30}/> : <SlMenu size={30}/>}
            </div>

            <div className={nav ? 'text-gray-100 z-40 fixed left-0 top-[100px] w-full p-5 bg-[#bf9edd94] ease-in-out duration-500': 'fixed left-[-100%]' }>
                <ul className='p-8 text-4xl ml-20 z-10 cursor-pointer'>
                    <li className='p-2'><Link to='/' spy={true} smooth={true} offset={50} duration={50}>Home</Link></li>
                    <li className='p-2'><Link to='about' spy={true} smooth={true} offset={50} duration={50}>About</Link></li>
                    <li className='p-2'><Link to='projects' spy={true} smooth={true} offset={50} duration={50}>Projects</Link></li>
                    <li className='p-2'><Link to='contact' spy={true} smooth={true} offset={50} duration={50}>Contact</Link></li>
                </ul>
            </div>
            
            <a href="https://youtu.be/dQw4w9WgXcQ?si=9G6BB_j37nVNKJvK" target="_blank" rel="noopener noreferrer" class='border border-white rounded-full font-bold px-6 mr-24 md:mr-0 py-2 hover:border-customBlue'>Hire Us</a>
        </div>
    );
};

export default NavBar;
