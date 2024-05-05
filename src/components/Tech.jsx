import React from 'react';
import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10 mt-20 '>
            {technologies.map((tech) => (
                <div className='w-28 h-28 pl-10 md:pl-0'>
                    <BallCanvas icon={tech.icon} />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "tech"); 