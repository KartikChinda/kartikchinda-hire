import React from 'react';
import { SectionWrapper } from '../hoc';
import { linkedin, gmail, github } from '../assets';
import { motion } from 'framer-motion';
import { textVariant } from '../util/motion';




const Contact = () => {
    return (
        <section className='p-2 mt-20 m-2 pb-20 border-2 border-[#ece6df] '>
            <motion.div variants={textVariant()} className='md:mt-10'>
                <p className='text-lg mb-1 font-semibold text-[#ece6df]'>Interested? </p>
                <p className='text-7xl mb-10 font-semibold tracking-wide text-[#ece6df] '>Let's get in touch!</p>
            </motion.div>

            <div className='flex flex-col justify-center items-center text-white '>

                <div className='p-7 group h-[40px] w-[250px] flex flex-col justify-center items-center text-[#ece6df] border-b-2 border-l-2 border-[#ece6df] rounded-2xl mt-10 gap-5 hover:border-b-0 hover:border-l-0 hover:border-t-2 hover:border-r-2'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <a className=' text-3xl font-bold group-hover:hidden '>
                            Linkedin
                        </a>
                        <img src={linkedin} alt="" className='h-[30px] w-[30px] group-hover:hidden' />
                    </div>

                    <a href="https://www.linkedin.com/in/kartik-chinda-5255711bb/" target="_blank" className='hidden text-2xl font-light group-hover:block font-subtext mb-5'>
                        Kartik Chinda
                    </a>
                </div>

                {/* Gmail */}
                <div className='p-7 group h-[40px] w-[250px] flex flex-col justify-center items-center text-[#ece6df] border-b-2 border-l-2 border-[#ece6df] rounded-2xl mt-10 gap-5 hover:border-b-0 hover:border-l-0 hover:border-t-2 hover:border-r-2'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <a href='' className=' text-3xl font-bold group-hover:hidden '>
                            Gmail
                        </a>
                        <img src={gmail} alt="" className='h-[20px] w-[20px] group-hover:hidden' />
                    </div>

                    <a href='mailto:kartik.chinda@gmail.com' target="_blank" className='hidden text-xl font-light group-hover:block font-subtext mb-5'>
                        kartik.chinda@gmail.com
                    </a>
                </div>

                {/* Github */}
                <div className='p-7 group h-[40px] w-[250px] flex flex-col justify-center items-center text-[#ece6df] border-b-2 border-l-2 border-[#ece6df] rounded-2xl mt-10 gap-5 hover:border-b-0 hover:border-l-0 hover:border-t-2 hover:border-r-2'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <a href='' target="_blank" className='text-3xl font-bold group-hover:hidden '>
                            GitHub
                        </a>
                        <img src={github} alt="" className='h-[30px] w-[30px] group-hover:hidden' />
                    </div>

                    <a href='https://github.com/KartikChinda' target="_blank" className='hidden text-2xl font-light group-hover:block font-subtext mb-5'>
                        KartikChinda
                    </a>
                </div>

            </div >
        </section >
    )
}

export default SectionWrapper(Contact, "Cont"); 