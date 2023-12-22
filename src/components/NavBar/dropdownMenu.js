import React from 'react';
import './style.css'
//Importation Router
import { NavLink } from 'react-router-dom'
//Importation Redux
import { setTargetArray} from '../PaintingsPage/paintingsPageSlide';
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router';

export function DropdownMenu() {
    const {id} = useParams
    const dispatch = useDispatch;
    function setTargetArray(){
        if( id === 'tyrol')
        dispatch(setTargetArray(0))
    }

    const sublinksArray = [
        { path: '/paintings/0', content: 'tyrol' },
        { path: '/paintings/1', content: 'paysages' },
        { path: '/paintings/2', content: 'personnages' }
    ]

    return (
        <div className='dropdown-menu'>
            {sublinksArray.map(links => links &&
                <NavLink className='sublinks' to={links.path} onClick={setTargetArray}>{links.content}</NavLink>
            )}
        </div>
    )
}

