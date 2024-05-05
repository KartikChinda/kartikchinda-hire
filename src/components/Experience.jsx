import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../util/motion';


const ExperienceCard = (experience) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
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

        </VerticalTimelineElement>
    )
}


const Experience = () => {
    return (
        <>
            <div className='px-2 bg-cyan-500 md:px-10 pt-10 pb-10'>
                <motion.div variants={textVariant()} >
                    <p className='text-sm mb-1 font-semibold z-10'>
                        A glimpse into my professional journey
                    </p >
                    <p className='text-5xl mb-3 font-bold tracking-wide'>
                        Work Experience
                    </p>
                </motion.div >
                <div className='mt-20 flex flex-col'>
                    <VerticalTimeline >
                        {experiences.map((exp, index) => <ExperienceCard key={index} experience={exp} />)}
                    </VerticalTimeline>
                </div>
            </div>

        </>
    )
}

export default SectionWrapper(Experience, "experience"); 