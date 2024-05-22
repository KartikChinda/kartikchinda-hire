import React from 'react'
import { motion } from 'framer-motion';

import { HeadBallCanvas } from '../canvas';
// import { BallCanvas } from '../canvas';
import { paraForeground } from '../assets';



const Hero = () => {

    return (
        <>
            <section id='header' className='bg-[#050c0F] mt-[105px]'>
                <div className=" h-[102vh] w-[100%] bg-hero-background md:hidden relative ">
                    <img src={paraForeground} alt="" className='hidden md:block h-[500px] w-[400px] z-30 absolute -top-5 bottom-0 left-0 right-0 m-auto ' />

                </div>
                <div className=" h-[102vh] w-[100%] hidden md:block lg:hidden relative bg-gradient-to-t from-[#050c0F] to-[#10232c]">
                    <img src={paraForeground} alt="" className='hidden md:block h-[500px] w-[400px] z-30 absolute -top-5 bottom-0 left-0 right-0 m-auto ' />

                </div>
                {/* <img src={backgroundImage} className='w-3/5 h-3/5' alt="img not loading" /> */}




                {/* <div className='flex flex-col md:flex md:flex-col md:mx-auto md:justify-center md:items-start justify-center items-start h-[100vh]' > */}


                {/* <div className='text-7xl font-black text-[#fff] font-heading px-10 mx-auto md:text-8xl md:px-0 '>K A R T I K  &nbsp; C H I N D A</div>
                     */}
                {/* <div className='flex mx-auto flex-row flex-wrap justify-center items-center  '>
                        {alphabets.map((letter) => (
                            <div className='w-[150px] h-30' key={letter.name}>
                                <HeadBallCanvas icon={letter.icon} />
                            </div>
                        ))}
                    </div> */}



                {/* </div>  */}
                <div>
                    {/* here lies in the coding of that little animation going on at the bottom middle. */}


                    <div className='absolute xs:bottom-10 xl:-bottom-16  -bottom-24 w-full flex flex-col justify-center items-center'>
                        <div className=' mt-5 md:hidden  font-black text-[#ece6df]   text-center font-heading  pb-4 text-5xl md:px-0 '>K A R T I K <br /> C H I N D A</div>
                        <div className=' mt-5 text-2xl font-black text-[#ece6df]  shadow-xlS hover:text-[26px] hover:text-[#f3e9ce] px-10 font-heading mx-auto   md:text-3xl '>I write code for a living.</div>

                        <button onClick={() => {
                            window.scrollBy(0, 100);
                        }}>

                            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#ece6df] flex justify-center items-start p-2'>
                                <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.3, repeat: Infinity, repeatType: 'loop' }}
                                    className="w-3 h-3 rounded-full bg-[#ece6df]"
                                />
                            </div>
                        </button>

                    </div>
                </div >
            </section >


        </>
    )
}

export default Hero; 