import React, { useState, useEffect } from 'react';
//Importation CSS
import './style.css'
//Importation components
import { DropdownMenu } from '../NavBar/dropdownMenu'
import { AnimatedFadeIn } from '../Animations/AnimatedFadeIn';
import { PopUp } from '../Popup/index'
//Importation data
import { data } from '../data/data'
//Import 
import { useParams } from 'react-router'
//Importation Redux


export function PaintingsPage() {
    const { id } = useParams();

    //Modification NavBar divisor
    const [img, setImg] = useState()
    function changeNavBarImg() {
        if (id === '0') {
            setImg('../../images/navbar-tyrol.jpg')
        } if (id === '1') {
            setImg('../../images/navbar-paysages.jpg')
        } if (id === '2') {
            setImg('../../images/navbar-pers.jpg')
        }
    }
    useEffect(changeNavBarImg)

    //Creation State Setter pour selectionner Image à dispatch vers PopUp
    const [clickedImage, setClickedImage] = useState({ src: '', status: false })
    const [targetArray, setTargetArray] = useState([])
    function handleClick(e) {
        const clickedTarget = e.target.alt
        setClickedImage({ src: clickedTarget, status: true })
        if (clickedTarget.includes('tyrol')) {
            const mergedTyrolArray =  data[0].map(obj => obj.imgArray).flat(); //Methode qui permet de concatener tous les subarray
            setTargetArray(mergedTyrolArray) 
        }
        if (clickedTarget.includes('paysages')) {
            const  mergedPaysagesArray =  data[1].map(obj => obj.imgArray).flat();
            setTargetArray(mergedPaysagesArray)
        }
        if (clickedTarget.includes('perso')) {
            const mergedPersoArray =  data[2].map(obj => obj.imgArray).flat();
            setTargetArray(mergedPersoArray)
        }

    }

    return (
        <AnimatedFadeIn>
            <div className='paintings-page-container'>
                <div className='links-container'>
                    <DropdownMenu />
                    <div className='navbar-div-container'>
                        <img src={img} alt='' />
                    </div>
                </div>

                <div className='paintings-container'>
                    {data[id].map(data =>
                        <div className={data.name} >
                            <div className='img-container'>
                                {data.imgArray.map(img =>
                                    <div className={data.container} onClick={handleClick}>
                                        <img src={img} alt={img} />
                                    </div>
                                )}
                            </div>
                            {/* <div className={data.details.container}>
                                {data.details ?
                                    <div className='details-text-container' >
                                        <p><span>Medium: </span>{data.details.medium}</p>
                                        <p><span>Format: </span>{data.details.format}</p>
                                        <p><span>Année: </span>{data.details.year}</p>
                                    </div>
                                    :
                                    <></>
                                }
                            </div> */}
                        </div>
                    )}
                </div>
                <></>
            </div>
            <PopUp clickedImage={clickedImage} setClickedImage={setClickedImage} imageArray={targetArray} />
        </AnimatedFadeIn>
    )
}

