import React from 'react';
import {Link} from 'react-router-dom';
import "./About.css"

export default function About() {
  return (
    <>
    <div className="a">
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img className="a-img" src="https://raw.githubusercontent.com/gist/UddeshJain/90646446c86e45c494d6e69bfc3005f1/raw/b15bee8a8b85f8740795b92c1878ab8ed9ec2204/About%20Me.gif" alt="about"></img>
        </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">I'm a Front-End Developer located in Dharuhera, Haryana, India. I have a serious passion for UI designs, effects, animations and creating dynamic user experiences.</p>
            <p className="a-desc">Well-organised person, problem solver, Open sourcer with high attention to details.  Fan of Dwayne Douglas Johnson, jim carrey & knueve reeves, outdoor games, Tv series and Novels. Interested in the entire frontend gamut and working on ambitious projects with positive peoples.</p>
            <p className="a-link"><Link style={{textDecoration:'none', color:'black'}} to="/contact"> Let's make something special.</Link></p>
        </div>
    </div>
    <div className="a-skill">
    <div className="wrapper">
            <div className="button">
                <div className="icon"><i class="fab fa-html5"></i></div>
                <span>HTML</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-css3-alt"></i></div>
                <span>CSS</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-js"></i></div>
                <span>JavaScript</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-react"></i></div>
                <span>ReactJS</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-node"></i></div>
                <span>Node</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fas fa-database"></i></div>
                <span>SQL</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-envira"></i></div>
                <span>MongoDB</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-java"></i></div>
                <span>JAVA</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-git"></i></div>
                <span>Git</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-github"></i></div>
                <span>Github</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-osi"></i></div>
                <span>OpenSource</span>
            </div>
            <div className="button">
                <div className="icon"><i class="fab fa-ubuntu"></i></div>
                <span>Linux</span>
            </div>
            </div>
    </div>  
    </>
  )
}
