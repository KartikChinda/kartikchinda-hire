import React from 'react';
import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
    return (
        <>
            <div className='md:mt-10 px-10'>
                <p className='text-sm mb-1 font-semibold'>Ever-learning, ever-growing</p>
                <p className='text-5xl mb-3 font-bold tracking-wide'>Tools in my arsenal</p>
            </div>
            <div className='flex flex-row flex-wrap justify-center items-center gap-10 mt-20 '>
                {technologies.map((tech) => (
                    <div className='w-28 h-28  md:pl-0' key={tech.name}>
                        <BallCanvas icon={tech.icon} />
                    </div>
                ))}
            </div>
        </>

    )
}

export default SectionWrapper(Tech, "tech"); 