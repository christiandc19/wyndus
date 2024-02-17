import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'

import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import Horizon from '../../assets/horizon.png'
// import UMR from '../../assets/umr.png'
// import United from '../../assets/united-healthcare.png'
import Optima from '../../assets/optima.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'

import Group from '../../assets/group.jpg'


const InsuranceSection = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className="InsuranceSection-container">
                <div>
                <h1>WE WORK WITH MAJOR INSURANCE</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>
                <div className="content">
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Aetna} height="100" alt="Aetna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Beacon} width="640" height="100" alt="Beacon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Bluecross} width="640" height="100" alt="Bluecross Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Cigna} width="640" height="100" alt="Cigna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Horizon} width="640" height="100" alt="Horizon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            {/* <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={UMR} width="640" height="100" alt="UMR Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={United} width="640" height="100" alt="United Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade> */}

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Optima} width="640" height="100" alt="Optima Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Optum} width="640" height="100" alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Anthem} width="640" height="100" alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                </div>
            </div>


            <div className='group'>
            <Fade bottom>
                <img src={Group} width="500px" height="320px" alt="Company Team" loading="lazy" />
            </Fade>
            </div>
        </div>



        </>
    )
}

export default InsuranceSection
