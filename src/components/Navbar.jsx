import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';




const Navbar = () => {

    // this keeps track of where we are on the page. 
    const [active, setActive] = useState("");

    return (
        <>
            <nav className='sm:px-16 px-6 w-full flex items-center py-3 fixed z-20 top-0 bg-black'>
                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                    <Link to="/" className='flex items-center gap-2' onClick={() => {
                        setActive("");
                        // when this is clicked, scroll to the top
                        window.scrollTo(0, 0);
                    }}>
                        <img src={logo} alt="imgLogo" className='w-20 h-20 object-contain' />
                        <p className='text-white text-[18px] font-bold cursor-pointer sm:block hidden'>K&nbsp; A&nbsp; R&nbsp; T&nbsp; I&nbsp; K&nbsp; &nbsp; C&nbsp; H&nbsp; I&nbsp; N&nbsp; D&nbsp; A </p>
                    </Link>
                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((link) => (
                            <li className='text-white'> <a href={`#${link.id}`}>{link.title}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar