import React from "react"
import { Project } from "../project"
import {project1,project2} from"../../data"
const ListProjects = ()=>{
    return (
       <section  id="proyectos" className="section-projects">
           <h1 className="section-projects-title">My projects</h1>
           <p className="section-projects-p">Lorem, ipsum dolor sit amet consecteturui amet voluptates atque op
               tio corrupti neque qui quo a?</p>
             <div className="list">
             <Project key={project1.id} img={project1.img} link={project1.link} github={project1.github} content={project1.content}/>
             <Project key={project2.id} img={project2.img} link={project2.link} github={project2.github} content={project2.content}/>

             </div>
       </section>
        
        
    )
}
export {ListProjects}