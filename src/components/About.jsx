import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../util/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon }) => {
    return (
        // <p>{title}</p>

        <Tilt className=" mx-auto w-[300px] xs:w-full md:mx-0 mb-10">
            <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full bg-white p-1 rounded-[20px] z-20 bg-gradient-to-r from-cyan-500 to-blue-500'>
                {/* here options are the tilt options we are providing to the cards that we have */}
                <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-white-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col z-10 shadow-[0_35px_60px_-15px_rgba(144,0,0,0.6)]'>
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-xl font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>

    )
}

const About = () => {
    return (
        <>
            <section>
                <motion.div variants={textVariant()} className='px-2 bg-yellow-500 md:px-10 pt-10 '>
                    <p className='text-sm mb-1 font-semibold '>
                        If the name hasn't <br /> made it clear yet...
                    </p>
                    <p className='text-5xl mb-3 font-bold tracking-wide'>
                        Who am I?
                    </p>
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-10 text-xl font-semibold leading-8 pb-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur magnam quasi voluptates eos esse ducimus ut beatae rem praesentium sit excepturi quos reprehenderit amet, velit itaque fugit omnis autem impedit, commodi repellat corrupti porro?
                    </motion.p>

                    <div className='mt-10 flex flex-wrap gap-10 md:mt-20'>
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>

                </motion.div>
            </section>
        </>
    )
}

export default SectionWrapper(About, "about");

// export default About; 