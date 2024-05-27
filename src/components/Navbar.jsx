import React from 'react';
// import { useState } from 'react';
// import { navLinks } from '../constants';
// import { Link } from 'react-router-dom';
import { logoColor } from '../assets';




const Navbar = () => {

    // this keeps track of where we are on the page. 
    // const [active, setActive] = useState("");
    // const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className='px-16 md:px-6 w-full flex items-center py-3 fixed z-20 top-0 bg-[#050c0F] '>

                <div className='w-full flex justify-center md:justify-between items-center xl:px-20 pr-5'>
                    {/* <Link to="/" className='flex items-center gap-2' onClick={() => {
                        setActive("");
                        // when this is clicked, scroll to the top
                        window.scrollTo(0, 0);
                    }}> */}
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                    }}>
                        <img src={logoColor} alt="imgLogo" className='w-20 h-20 object-contain ' />
                    </a>

                    <p className='text-[#ece6df] text-[24px] font-bold cursor-pointer lg:block hidden font-heading '>K&nbsp; &nbsp;  A&nbsp; &nbsp; R&nbsp; &nbsp; T&nbsp; &nbsp; I&nbsp; &nbsp; K&nbsp; &nbsp; &nbsp; &nbsp; C&nbsp; &nbsp; H&nbsp; &nbsp; I&nbsp; &nbsp; N&nbsp; &nbsp; D&nbsp; &nbsp; A </p>

                </div>

            </nav >

        </>
    )
}

export default Navbar