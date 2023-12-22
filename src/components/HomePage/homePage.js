import React from 'react';
import { AnimatedFadeIn } from '../Animations/AnimatedFadeIn';
import './style.css'

export function HomePage() {

    return (
        <AnimatedFadeIn>
            <div className='home-page-container'>
                <div className='quote-container'>
                        <p>"Le flou fond les formes, les couleurs, efface les détails, et met l’image dans un « entre-deux ».
                            Il fait appel à l’imaginaire… il  invite à méditer, et à entrer dans un monde intérieur.
                            Tâtonnements, hésitations, doutes… peu à peu l’image apparaît, tout en disparaissant.
                            Ce mécanisme de disparition-apparition convoque autant les phénomènes optiques de reflets,
                            de réverbération, d’effacement que les méandres de la mémoire, de ce qui a disparu de notre monde sensible,
                            et pourtant reste à l’état d’échos et de traces."</p>
                        <span> - Marianne Osteaux</span>
                </div>
            </div>
        </AnimatedFadeIn>
    )
}
