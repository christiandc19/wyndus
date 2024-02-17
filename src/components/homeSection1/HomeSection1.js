import React from 'react'
import './HomeSection1.css'
import { Link } from 'react-router-dom';
import { FaPills } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { BiBrain } from 'react-icons/bi';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'


const HomeSection1 = () => {
  return (
<>

<div className='wwa'>
    <div className='wwa-header container'>
    <h1>DESIGN SERVICES</h1>
    <p>Lights, camera, action! Get the video you need, without the hassle. Our scalable video production services meet you where you are and plug into your winning go-to-market strategy.</p>
    </div>

<div className='wwa-cards'>
    <div className='wwa-cards-contents'>
        <div className='card1 card'>
        <Fade left>
            <div className='card-content'>
                <FaPills className='card-icon1'/>
                <h1>Animation Reel</h1>
                <p>Full character animations or typography combined with stock footage. Stuff like:</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse">
                <h5>LEARN MORE</h5>
                </Link>
                </LinkRoll>
            </div>
        </Fade>
        </div>

    

        <div className='card2 card'>
        <Fade top>
            <div className='card-content'>
                <MdWorkOutline className='card-icon2'/>
                <h1>Jobs Program</h1>
                <p>Our most unique feature sets you up with interview clothes, interview skills, resume assistance, and all the resources you need to get a job with a great company.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/jobs">
                <h5>LEARN MORE</h5>
                </Link>
                </LinkRoll>
            </div>    
        </Fade>    
        </div>


        <div className='card3 card'>
        <Fade right>
            <div className='card-content'>
                <BiBrain className='card-icon3'/>
                <h1>Mental Health Programs</h1>
                <p> We provide access to specific mental health services offered by a multidisciplinary team.
                It is for adults, teenagers and children who present symptoms of the most common mental disorders, such as an anxiety disorder or depression.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mental-health">
                <h5>LEARN MORE</h5>
                </Link>
                </LinkRoll>
            </div> 
        </Fade>     
        </div>
    </div>
</div>
</div>

</>
  )
}

export default HomeSection1