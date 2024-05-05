import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../util/motion';


const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#050c0F",
                color: "#ece6df",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #D5CEA3" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >

            <div >
                <h3 className='text-[#ece6df] text-2xl mb-1 font-bold'>{experience.title}</h3>
                <p
                    className='text-xl font-semibold'
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2 text-[#ece6df]'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-md pl-1 tracking-wider font-subtext '
                    >
                        {point}
                    </li>
                ))}
            </ul>


        </VerticalTimelineElement>
    )
}


const Experience = () => {
    return (
        <>
            <section className='p-2 lg:mb-10'>
                <div className='px-2 bg-[#050c0F] md:px-10 pt-10 pb-10 border-2 border-[#ece6df]'>
                    <motion.div variants={textVariant()} >
                        <p className='text-lg mb-1 font-normal z-10 text-[#ece6df]'>
                            A glimpse into my professional journey
                        </p >
                        <p className='text-7xl mb-3 font-bold tracking-wide text-[#ece6df]'>
                            Work Experience
                        </p>
                    </motion.div >
                    <div className='mt-20 flex flex-col'>
                        <VerticalTimeline >
                            {experiences.map((exp, index) => <ExperienceCard key={index} experience={exp} />)}
                        </VerticalTimeline>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SectionWrapper(Experience, "experience"); 