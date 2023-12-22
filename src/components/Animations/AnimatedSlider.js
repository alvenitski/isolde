import React from 'react';
import {motion} from 'framer-motion';

export function AnimatedSlider({children, direction}){
const swipeLeft = {
    initial:{x:-100},
    animate:{x:0},  
}

const swipeRight={
    initial:{x:100},
    animate:{x:0},
}

    return(
        <motion.div variants={direction === 'left' ? swipeLeft : swipeRight} 
        initial='initial' 
        animate="animate" 
        exit='exit' 
        transition={{duration:0.3}}>
            {children}
        </motion.div>
    )
}