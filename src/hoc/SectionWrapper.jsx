
import { motion } from 'framer-motion'
import { staggerContainer } from '../util/motion';

/* here is what this entire thing is about: 
        1. We could either add in the styles for framer-motion to work separately for each component, or we can wrap each component in this boilerplate-ish wrapper, and not apply the styles separately. 
        (For context, imagine those ejs templates where you defined the footer and header in just one file, and injected the code in between)

*/

const StarWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className="py-16 md:py-10 max-w-7xl mx-auto relative z-0">
                <span className='mt-[-100px] pb=[100px] block' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    }


export default StarWrapper;