import React from "react"
type Prop = {
    img:string,
    link:string,
    github:string,
    content:string
}
const Project = (props:Prop)=>{
    
    return (
    <div className="project">
     <div className="pr-conteiner">
        <div className="p-img" >
        <img className="project-img" src={props.img} alt="" />
        </div>
       <div className="p-verMas">
       <h1 className="project-title">Ver mas</h1>
      <div className="p-visto">
      <p className="p-item">{props.content}</p>
        <div className="p-links">
        <a target="_blank"  className="link" href={props.link}>Ver</a> 
        <a target="_blank" className="link" href={props.github}>Codigo</a> 
        </div>

      </div>
      
       </div>
     </div>
       

        
        
    </div>)
}
export {Project}