import React from "react";
import { FaNodeJs,FaReact,FaHtml5 } from "react-icons/fa";
import { SiTypescript,SiExpress,SiCss3,SiFirebase,SiPostgresql,SiSequelize } from "react-icons/si";
import { Tecnologias } from "../tecnologias";
const Intro = ()=>{
    return (
        <div  className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">Javier Torales</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer Js</div>
                            <div className="i-title-item">Backend Node js</div>
                            <div className="i-title-item">Frontend React</div>
                            <div className="i-title-item">Developer Fullstack </div>
                        </div>
                    </div>
                    <div className="tec-responsive">
                    <Tecnologias></Tecnologias>
                    </div>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bgform"></div>
                <img className="i-img" src="https://res.cloudinary.com/apxschool/image/upload/v1651881386/ask4cqktr8c3q3oqlp9g.png" alt="" />
            </div>
        </div>
    )
}
export {Intro}