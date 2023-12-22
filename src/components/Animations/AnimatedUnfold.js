import React from 'react';
import {motion} from 'framer-motion';

export function AnimatedUnfold({children}){
    const animations = {
        initial:{y:-20},
        animate:{y:-10},
        exit:{y:-20}
    }
    
    return(
        <motion.div variants={animations} initial='initial' animate='animate'  exit='exit' transition={{duration:0.5}}  >
            {children}
        </motion.div>
    )
}