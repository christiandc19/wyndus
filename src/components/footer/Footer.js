import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<>
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <h1>ALWYN FUNA</h1>

                    </div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">

                    <div className="col">
                        <h3>Header 1</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mission'><p>Item 1</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>Item 2</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/team'><p>Item 3</p></Link>
                        </LinkRoll>

                    </div>


                    <div className="col">
                        <h3>Header 2</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Item 1</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mental-health'><p>Item 2</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/substance-abuse'><p>Item 3</p></Link>
                        </LinkRoll>
                    </div>

                </div>


                <p className='copyright'><p>&copy; 2024 Alwyn Funa. All rights reserved</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
