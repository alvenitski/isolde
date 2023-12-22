import React, { useState, useEffect } from 'react';
import './style.css'
//Importation components
import { NavBar } from '../NavBar/navbar';
import { Footer } from '../Footer/footer';
import { EnterPage } from '../EnterPage/enterPage';
//Importation Router
import { Outlet, useLocation} from 'react-router-dom'
import {useParams} from 'react-router'
export function Root() {
    //Fonction pour ne plus display EnterPage
    const location = useLocation();
    const [enter, setEnter] = useState(false)
    function toggleEnterPage() {
        if (location.pathname !== '/') {
            setEnter(true)
        } else {
            return
        }
    }
    useEffect(toggleEnterPage)

    //Fonction pour modifier background sur base du pathname
    const {id} = useParams();
    console.log(id)
    const [bg, setBg] = useState(null)
    function changeBackgroundImage(){
        if(location.pathname === '/home'){
            setBg('../../images/bg-home.jpg')
        }
        if(location.pathname ==='/about'){
            setBg('../../images/bg-about.jpg')
        }
        if(id === '0'){
            setBg('../../images/bg-tyrol.jpg')
        }
        if (id === '1'){
            setBg('../../images/bg-paysages.jpg')
        }
        if (id === '2'){
            setBg('../../images/bg-perso.jpg')
        }
    }
    useEffect(changeBackgroundImage)



    return (
        <div className='root-container' style={{backgroundImage:`url(${bg})`}}>
            {enter ?
                <>
                    <NavBar />
                    <Outlet />
                    <Footer />
                </>
                :
                <EnterPage />
            }
        </div>
    )
}