import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'

import Maya from '../../assets/maya.webp'
import AfterEffect from '../../assets/after_effects.webp'
import Syntheyes from '../../assets/syntheyes.webp'
import Photoshop from '../../assets/photoshop.webp'
import Unreal from '../../assets/unreal.webp'
import Zbrush from '../../assets/zbrush.webp'
import Premiere from '../../assets/premiere.webp'
import Lightroom from '../../assets/lightroom.webp'



const InsuranceSection = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className="InsuranceSection-container container">
                <div>
                <h1>SOFTWARE</h1>
                <p>This list is just a snapshot of our expertise. If you have specific software requirements not listed here, feel free to reach out to us. We are always eager to expand our knowledge and take on new challenges. Let's collaborate to bring your ideas to life using the best tools for the job!</p>
                </div>
                <div className="content">
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Maya} alt="Maya Logo Logo" loading="lazy"/>
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={AfterEffect} alt="Beacon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Syntheyes} alt="Bluecross Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Photoshop} alt="Cigna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Unreal} alt="Horizon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Zbrush} alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Premiere} alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Lightroom} alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                </div>
            </div>


        </div>



        </>
    )
}

export default InsuranceSection
