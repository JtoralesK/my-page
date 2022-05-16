import React from "react";
import { FaNodeJs,FaReact,FaHtml5 } from "react-icons/fa";
import { SiTypescript,SiExpress,SiCss3,SiFirebase,SiPostgresql,SiSequelize, SiWebpack} from "react-icons/si";

const Tecnologias = ()=>{
    return (
        
        <div  className="i-icons">
        <FaNodeJs></FaNodeJs>
        <SiFirebase></SiFirebase>
        <SiPostgresql></SiPostgresql>
        <SiSequelize></SiSequelize>
        <SiTypescript></SiTypescript>
        <SiExpress></SiExpress>
        <FaReact></FaReact>
        <FaHtml5></FaHtml5>
        <SiCss3></SiCss3>
        <SiWebpack></SiWebpack>
        </div>          
    )
}
export {Tecnologias}