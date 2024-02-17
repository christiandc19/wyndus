import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
import './Hero2.css'

import Me from '../../assets/me2.png'

const Hero2 = () => {
    return (
<>        

        <div className='hero'>
            <div className='hero-left'>
            </div>

            <div className='hero-right'>
            </div>


            <div className="hero-container">

                <div className='me'>
                    <img src={Me} alt='Alwyn Funa Headshot' loading='lazy' />
                </div>

                <div className="content">
                        <p>Hello!</p>
                        <h1>I'M ALWYN</h1>
                        <h2>Animator and Graphic Designer</h2>
                        <div className='socials'>
                            <p><FaFacebookF /></p>
                            <p><FaTwitter /></p>
                            <p><FaYoutube /></p>
                            <p><FaInstagram  /></p>
                        </div>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero2