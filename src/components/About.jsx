import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
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
            <section className='p-2 lg:mb-10'>
                <motion.div variants={textVariant()} className='px-2 bg-[#050c0f] md:px-10 pt-10 border-2 border-bg-[#ece6df] mt-16 '>
                    <p className='text-lg mb-1 mt-5 font-semibold text-[#ece6df] '>
                        Get to know the next addition to your team
                    </p>
                    <p className='text-7xl mb-5 font-bold tracking-wide text-[#ece6df]'>
                        About me.
                    </p>
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-10 text-lg font-light leading-8 pb-20 text-[#ece6df] font-subtext'>
                        Before we proceed any further, I must get one thing out in the open.
                        I once declared a variable as:  <br /><br />
                        long long ago &nbsp;
                        <span className='font-normal  text-[#ece6df88]'>// in a galaxy far, far away</span>

                        <br />  <br />
                        Now that we have that out of the way, I am Kartik Chinda, a senior at KIIT, Odisha, pursuing an undergrad degree in the field of Computer Sciences and Engineering. During my undergrad, I maintained a stellar <span className='font-bold text-[#ece6df] hover:drop-shadow-lg'> GPA of 9.25/10</span>, did some notable software development and research internships at prestigious organizations (<span className='font-bold text-[#ece6df] hover:drop-shadow-lg'>UWaterloo, DRDO, DigitalSchmeide Bayern</span>, to name a few), contributed to open source, and authored quite a few research papers.
                        <br /> <br />
                        Now, I am currently fresh out on the hunt for that next ambitious product to build, in an organization that runs on <span className='italic hover:not-italic font-semibold'>code, collaborations and coffee</span>.

                        <br /> <br />
                        When I am not side eyeing people on using light mode on their IDE's, or writing the most hilarious git commit messages, you can find me engrossed in literature, planning a trip to the nearest hidden jewel in the arms of nature, or at the movies.
                    </motion.p>


                </motion.div>
            </section>
        </>
    )
}

export default SectionWrapper(About, "about");

// export default About; 