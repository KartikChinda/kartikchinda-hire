import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <div className='h-[100vh]' >Here will go your entire hero section</div>
            <div>
                {/* here lies in the coding of that little animation going on at the bottom middle. */}
                <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>

                    <button onClick={() => {
                        window.scrollBy(0, 100);
                    }}>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white-400 flex justify-center items-start p-2'>
                            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.3, repeat: Infinity, repeatType: 'loop' }}
                                className="w-3 h-3 rounded-full bg-yellow-500"
                            />
                        </div>
                    </button>

                </div>
            </div >

        </>
    )
}

export default Hero; 