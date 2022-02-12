import React from 'react';
import "./Intro.css";
import Me from '../../img/me.png';

export default function Intro() {
  return (
    <>
     <div className="i"> 
        <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-into">Hello, My Name is</h2>
            <h1 className="i-name">Yogesh Sharma</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">FrontEnd Developer</div>
                <div className="i-title-item">Freelancer</div>
                <div className="i-title-item">React Developer</div>
                <div className="i-title-item">Content Creator</div>
                </div>
            </div>
            <p className="i-desc">
            I'm a web developer currently seeking for a full-time role where I can grow professionally and showcase my talents in creating unforgettable campaigns.
            </p>
        </div>
        {/* <svg width="75" height="75" viewBox="0 0 75 75" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
        <g id="scroll">
            <path
        </g>

        </svg> */}
        </div>
        <div className="i-right">
        <div className="i-bg"></div>
            <img className="i-img" src={Me} alt="img"></img>
        </div>
     </div>
    </>
  )
}
