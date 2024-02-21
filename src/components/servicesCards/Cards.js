import React from "react";
import "./Cards.css";


const Cards = () => {
  return (
    <>
    <div className="bg">

      <div id="cards">
        <div className="main-cards-header container">
          <h1>MY WORK</h1>
          <p>3D Animator specializing in previs, postvis and key frame animation </p>
        </div>



      <div className="cards-flex ">

          <div className="card-iframe">
          <div className="card-caption">
            <h1>2023 ANIMATION REEL</h1>
          </div>
          <iframe src="https://player.vimeo.com/video/790651050?h=522f45cab3&title=0&portrait=0" title="2023 ANIMATION REEL" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>          
          </div>

          <div className="card-iframe">
          <div className="card-caption">
            <h1>2023 PREVIS / POSTVIS REEL</h1>
          </div>

          <iframe src="https://player.vimeo.com/video/790651966?h=a21284314d&title=0&portrait=0" title="2023 PREVIS / POSTVIS REEL" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>          
          </div>


          </div>

      </div>

    </div>
    </>
  );
};

export default Cards;
