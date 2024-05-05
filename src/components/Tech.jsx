import React from 'react';
import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../util/motion';

const Tech = () => {
    return (
        <>
            <section>
                <motion.div variants={textVariant()} className='md:mt-10 px-10'>
                    <p className='text-lg mb-1 font-semibold text-[#ece6df]'>Ever-learning, ever-growing</p>
                    <p className='text-7xl mb-3 font-semibold tracking-wide text-[#ece6df]'>Tools in my arsenal.</p>
                </motion.div>
                <div className='flex flex-row flex-wrap justify-center items-center gap-10 mt-20 '>
                    {technologies.map((tech) => (
                        <div className='w-28 h-28  md:pl-0' key={tech.name}>
                            <BallCanvas icon={tech.icon} />
                        </div>
                    ))}
                </div>
            </section>

        </>

    )
}

export default SectionWrapper(Tech, "tech"); 