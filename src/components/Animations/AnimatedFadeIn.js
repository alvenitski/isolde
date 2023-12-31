import React from 'react';
import {motion} from 'framer-motion';

export function AnimatedFadeIn({children}){
    const animations = {
        initial:{opacity: 0.5},
        animate:{opacity:1},
        exit:{opacity: 0.5}
    }
    
    return(
        <motion.div variants={animations} initial='initial' animate='animate'  exit='exit' transition={{duration:1}}  >
            {children}
        </motion.div>
    )
}