import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../util/motion';
import { testimonials } from '../constants';

const TestimonialCard = ({ testimonial, name, designation, company, index }) => {
    return (
        <div>
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <div className="mx-auto p-2 border-b-2 border-l-2 border-[#ece6df] rounded-2xl w-[360px] lg:w-[370px] hover:border-t-2 hover:border-r-2 hover:border-b-0 hover:border-l-0">
                    <div className='mt-5 flex flex-col'>
                        <h2 className='text-[#ece6df] text-5xl font-bold px-5'>"</h2>
                        <p className='px-5 mt-3 text-lg font-subtext text-[#ece6df]'>{testimonial}</p>
                        <h2 className='text-[#ece6df] text-xl mt-5 pb-5 font-bold px-5'>{name}</h2>
                    </div>

                </div>
            </motion.div>
        </div >
    )
}


const Feedbacks = () => {
    return (
        <section className='p-2 mt-10 m-2 pb-5 border-2 border-[#ece6df]'>
            <motion.div variants={textVariant()} className='md:mt-10'>
                <p className='text-lg mb-1 font-semibold text-[#ece6df]'>Narcissism begets humility, so</p>
                <p className='text-7xl mb-3 font-semibold tracking-wide text-[#ece6df]'>What others have to say.</p>
            </motion.div>
            <div className='mt-10 flex flex-wrap gap-10 md:mt-20 lg:justify-center'>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} index={index} {...testimonial} />
                ))}
            </div>

        </section>
    )
}

export default SectionWrapper(Feedbacks, "feedback");