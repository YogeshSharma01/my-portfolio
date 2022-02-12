import React from 'react'
import "./ProjectList.css";
import Project from "../Project/Project";
import{Webprojects} from "../../Data";

export default function ProjectList() {
  return (
    <>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">My Work & Experience </h1>
          <p className="pl-desc">
          I just completed my graduation and I'm doing coding since the second year of my college.
          I create successful responsive websites that are easy to use.
          The main area of my expertise is front-end development, HTML, CSS, JS, ReactJS.
          I also have full-stack developer experience with popular open-source org.
          </p>
        </div>
        <div className="pl-list">
        {Webprojects.map(item=>(
          <Project key={item.id} heading={item.heading} img={item.img} link={item.link} desc={item.desc} />
        ))}
          
        </div>
      </div>
    </>
  )
}
