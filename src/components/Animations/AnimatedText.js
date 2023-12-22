import React from 'react';
import {motion} from 'framer-motion';

export function AnimatedText({children}){
const anim = {
    initial:{y:-100, x:-100},
    animate:{y:0, x:0},  
}

    return(
        <motion.div variants={anim} 
        initial='initial' 
        animate="animate" 
        exit='exit' 
        transition={{duration:0.3}}>
            {children}
        </motion.div>
    )
}