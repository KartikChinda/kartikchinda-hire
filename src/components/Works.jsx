import React from 'react';
import { motion } from 'framer-motion';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../util/motion';



const ProjectCard = ({ index, name, description, tags, image, websiteLink, sourceCodeLink }) => {
    return (
        <div>
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <div className="mx-auto  text-[#ece6df] h-[900px] p-2 border-b-2 border-l-2 border-[#ece6df] rounded-2xl w-[360px] lg:w-[370px]   hover:border-t-2 hover:border-r-2 hover:border-b-0 hover:border-l-0">
                    <div className='relative w-full h-[350px]'>
                        <img src=
                            {image} alt={name} className='w-full h-[300px] object-cover rounded-2xl' />
                        <div className='absolute inset-0 flex justify-end m-2 '>
                            <div
                                onClick={() => window.open(sourceCodeLink, "_blank")}
                                className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <img
                                    src={github}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col'>
                        <a className='text-[#ece6df] text-3xl font-bold px-5' href={websiteLink} target="_blank">{name}</a>
                        <p className='px-5 mt-3 text-lg font-subtext text-[#ece6df]'>{description}</p>
                    </div>
                    <div className='mt-4 px-5 flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={"text-lg font-subtext  text-[#ece6df]"}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div >
    )
}



const Works = () => {
    return (
        <section className='p-2 mt-20 m-2 pb-5 border-2 border-[#ece6df]'>
            <motion.div variants={textVariant()} className='md:mt-10'>
                <p className='text-lg mb-1 font-semibold text-[#ece6df]'>Gettin my hands dirty</p>
                <p className='text-7xl mb-3 font-semibold tracking-wide text-[#ece6df]'>Projects on display.</p>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-lg text-[#ece6df] font-subtext mt-10  '>
                I believe in crafting products that leave an intentional, engaging, and delightful impression on people. With a blend of storytelling and my never ending thirst for learning new technology, all my projects aim to deliver long term sustainable systems.
            </motion.p>

            <div className='mt-10 flex flex-wrap gap-10 md:mt-20 lg:justify-center '>
                {projects.map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default SectionWrapper(Works, "works"); 