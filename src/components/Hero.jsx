import React from 'react'
import { motion } from 'framer-motion';
import CanvasAnimation from './CanvasAnimation';



const Hero = () => {


    return (
        <>
            <section id='header' className='bg-black  mt-[105px]'>
                <div className='flex flex-col justify-center items-start h-[100vh]' >

                    <div className='text-7xl font-black text-[#fff] font-heading px-10 mx-auto md:text-8xl md:px-0 '>K A R T I K  &nbsp; C H I N D A</div>
                    <div className=' mt-5 text-2xl font-bold text-[#fff]  px-10 font-heading mx-auto  md:text-5xl md:px-0 '>I write code for a living.</div>
                    {/* <CanvasAnimation /> */}

                </div>
                <div>
                    {/* here lies in the coding of that little animation going on at the bottom middle. */}

                    <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>

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
            </section>


        </>
    )
}

export default Hero; 