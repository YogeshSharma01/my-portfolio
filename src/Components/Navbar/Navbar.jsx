import React,{useEffect} from 'react';
import Name from '../../img/name.png'
import {Link, useLocation} from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  let location = useLocation();
 useEffect(() => {
    
  }, [location]);
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src={Name} alt="logo"></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active": ""} `} aria-current="page" to="/"><span className="ok"> Home</span></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active": ""} `} to="/about"><span className="ok">About</span></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/work"? "active": ""} `} to="/work"><span className="ok">My Work</span></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/contact"? "active": ""} `} to="/contact"><span className="ok">Contact</span></Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
