import React, { useState, useEffect } from 'react';
import './style.css'
//Importation animation
import { AnimatedUnfold } from '../Animations/AnimatedUnfold';
import { DropdownMenu } from './dropdownMenu';
//Importation Router
import { NavLink, Link, useLocation} from 'react-router-dom'
import {useParams} from 'react-router';

export function NavBar() {
    const navbarArray = [
        { pathname: "home", content: 'Home' },
        { pathname: "paintings", content: 'Paintings' },
        { pathname: "about", content: 'About' }
    ];

    /*Active className pour Paintings
    const location = useLocation()
    const {id} = useParams()
    const [isActive, setIsActive] = useState(false)
    function setActiveClass(){
        if(location.pathname === '/paintings/' + id){
            setIsActive(true)
        }
    }
  */
   

    const [hover, setHover] = useState(false);
    const navbar = navbarArray.map(navlink => navlink.pathname === 'home' || navlink.pathname === 'about' ?
        <NavLink className='page-links' id={navlink.pathname} to={'/' + navlink.pathname}>{navlink.content}</NavLink>
        :
        <div className='page-links' id={navlink.pathname} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {navlink.content}
            <span id='arrow' style={hover ? { transform: 'rotate(225deg)' } : { transform: 'rotate(135deg)' }}></span>
            {hover &&
              <AnimatedUnfold>
                  <DropdownMenu/>
              </AnimatedUnfold>
            }
        </div>
    )

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-logo-container'>
                    <img src='../../images/paintings/navbar-logo.jpg' alt='navbar-logo' />
                </div>
                <div className='navbar-link-container'>
                    {navbar}
                </div>
            </div>
        </>
    )
}

