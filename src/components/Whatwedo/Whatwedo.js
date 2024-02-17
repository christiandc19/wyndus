import React from "react";
import "./Whatwedo.css";
import Fade from 'react-reveal/Fade';

import wrapper1 from "../../assets/me2.png";

const WhatWeDo = () => {
  return (
    <>
      <div className="wrapper1 ">
        <div className="wrapper-content container">
          <div className="wrapper-content-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>
        

          <div className="wrapper-content-right">
          <Fade right>
            <h1>ABOUT ME</h1> <br />
          </Fade>
          
          <Fade right>
            <p>
            Hi! I’m Alwyn and I am passionate about everything that has to do with Digital Design and Art Direction. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful designs and experiences. <br/>

            An enthusiastic and creative person, with a proven record of delivering creative and innovative design solutions. I’m used to working on both long and short-term projects, and always ensure I deliver within agreed timescales. I enjoy the challenge of learning new skills, working with varied clients, and pride myself on keeping abreast of the latest creative and technological trends. With 8 years experience in the industry, I have broadened my knowledge and skills with each new project and am constantly improving both as a communicator and designer.
            </p>
          </Fade>

          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
