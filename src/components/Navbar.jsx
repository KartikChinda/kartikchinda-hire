import React from 'react';
// import { useState } from 'react';
// import { navLinks } from '../constants';
// import { Link } from 'react-router-dom';
import { logo } from '../assets';




const Navbar = () => {

    // this keeps track of where we are on the page. 
    // const [active, setActive] = useState("");
    // const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className='px-16 md:px-6 w-full flex justify-between items-center py-3 fixed z-20 top-0 bg-black '>
                <div className='  w-full flex justify-center items-center max-w-7xl md:justify-between lg:justify-between lg:w-[1200px] '>
                    {/* <Link to="/" className='flex items-center gap-2' onClick={() => {
                        setActive("");
                        // when this is clicked, scroll to the top
                        window.scrollTo(0, 0);
                    }}> */}
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                    }}>
                        <img src={logo} alt="imgLogo" className='w-20 h-20 object-contain ' />
                    </a>

                    <p className='text-white text-[18px] font-bold cursor-pointer md:block hidden font-dot'>K&nbsp; &nbsp;  A&nbsp; &nbsp; R&nbsp; &nbsp; T&nbsp; &nbsp; I&nbsp; &nbsp; K&nbsp; &nbsp; &nbsp; &nbsp; C&nbsp; &nbsp; H&nbsp; &nbsp; I&nbsp; &nbsp; N&nbsp; &nbsp; D&nbsp; &nbsp; A </p>
                    {/* </Link> */}
                    {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((link) => (
                            <li className={`${active === link.title ? "text-white" : "text-slate-400"} hover:text-white text-[18px] font-medium cursor-pointer  `} onClick={() => setActive(link.title)}> <a href={`#${link.id}`}>{link.title}</a></li>
                        ))}
                    </ul>
                    {/* here, flex-1 means that first the elements of the other divs will have the same width as the content given to them, but element with flex-1 will have the remaining full space. If all elements inside the parent div (which must be flex for child's div's flex-1 to work) have flex-1, then all of them will receive same space.  */}
                    {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />


                    // </div> */}
                </div>

            </nav >

        </>
    )
}

export default Navbar