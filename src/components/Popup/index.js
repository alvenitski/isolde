import React, { useState } from 'react';
import './styles.css';
import { AnimatedSlider } from '../Animations/AnimatedSlider';
import { AnimatedFadeIn } from '../Animations/AnimatedFadeIn.js';

export function PopUp({clickedImage, setClickedImage, imageArray}) {
    function closePopUp() {
        setClickedImage({ status: false })
        setPrevIndex(undefined);
    };


    //Creation State Setter pour obtenir prevIndex servant a définir direction pour AnimationSlider
    const [prevIndex, setPrevIndex] = useState();
    const currentIndex = imageArray.indexOf(clickedImage.src);
    function goToPrevious() {
        if (currentIndex !== 0) {
            setPrevIndex(currentIndex);
            setClickedImage({ src: imageArray[currentIndex - 1], status: true })
        }
    };

    function goToNext() {
        if (currentIndex < imageArray.length) {
            setPrevIndex(currentIndex);
            setClickedImage({ src: imageArray[currentIndex + 1], status: true })
        }
        if (currentIndex === imageArray.length - 1) {
            setClickedImage({ src: imageArray[currentIndex], status: true })
        }
    };

    //Variable definissant la direction
    let direction = '';
    if(prevIndex === undefined){
        direction= 'fade-in';
    } if(currentIndex > prevIndex ){
        direction = 'left';

    } if(currentIndex < prevIndex){
        direction='right;'
    };


    return (
        clickedImage.status &&
        <div className="popup" id='popup'>
            <div className='enlarged-image'>
                {direction === 'fade-in'? 
                <AnimatedFadeIn>
                    <img src={clickedImage.src} alt="" />
                </AnimatedFadeIn>
                :
                <AnimatedSlider direction={direction} key={currentIndex}> {/*!!! AJOUTER KEY pour obtenir swipe effect a chaque render*/}
                    <img src={clickedImage.src} alt="" />
                </AnimatedSlider>     
                }
                
            </div>
            <span className='close-btn' onClick={closePopUp}>X</span>
                <span className='arrow-left' onClick={goToPrevious}></span>
                <span className='arrow-right' onClick={goToNext}></span> 
                </div>
    )       
}