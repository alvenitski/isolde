import React from 'react';
import './style.css'
//Importaion data
import {aboutPageData} from '../data/aboutData'
//Importation components
import { AnimatedFadeIn } from '../Animations/AnimatedFadeIn';

export function AboutPage() {
   

    //Redirect vers site externe
    function handleInstagramRedirect() {
        window.open('https://www.instagram.com/thomaisolde/', '_blank')
    }

    return (
        <AnimatedFadeIn>
            <div className='about-page-container'>
                <section className='photo-container'>
                    <img src='../../images/about/it.jpg' alt='' />
                </section>
                <section className='text-container'>
                    <div id='personnal-info'>
                        <h2>Isolde Thoma</h2>
                        <div id='birth'>
                            <p>Née le 24 septembre 1958 à Zams, Autriche.</p>
                            <p>Vit depuis 1981 à Bruxelles.</p>
                        </div>
                    </div>
                    {aboutPageData.map(section => section &&
                        <div className='cv' id={section.name.toLowerCase()}>
                            <h3>{section.name}: </h3>
                            <ul className={section.name.toLowerCase() + '-list'}>
                                {section.array.map(info => info &&
                                    <li>
                                        <p><span id='year'>{info.year}: </span>{info.content}</p>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    <div className='insta-container' onClick={handleInstagramRedirect}>
                        <img src='../../images/about/ig-logo2.png' alt='insta-logo' />
                    </div>
                </section>
            </div>
        </AnimatedFadeIn>
    )
}