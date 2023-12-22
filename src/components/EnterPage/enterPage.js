import React from 'react';
//Importation CSS
import './style.css'
import { useNavigate } from 'react-router-dom';
//Importaion framer motion
import { AnimatedFadeIn } from '../Animations/AnimatedFadeIn'

export function EnterPage() {
    const navigate = useNavigate();
    return (
        <AnimatedFadeIn>
            <div className='enter-page-container'>
                <div id='enter-button-container' onClick={()=>{navigate('/home')}}>
                    <div id='enter-button'>ENTER</div>
                </div>
            </div>
        </AnimatedFadeIn>
    )
}

