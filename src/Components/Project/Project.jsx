import React from 'react'
import "./Project.css";
export default function Project({heading,img,link,desc}) {
  return (
    <>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle R"></div>
          <div className="p-circle Y"></div>
          <div className="p-circle G"></div>
         
          </div>
          
          <a className="head-desc"  href={link} target="_blank" rel="noreferrer">
            <img className="p-img" src={img} alt="project_img"></img>
            <h3  className="p-img">{heading} {desc} </h3>
          </a>
          
           
       
      </div>
    </>
  )
}
