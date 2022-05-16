import React from "react"
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";

const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="footer_box">
            <div className="footer_bar"></div>

                <h1>Torales Javier</h1>
                <p>Mis Redes</p>
               <div className="redes">
                   <a target="_blank" href="https://www.linkedin.com/in/javitorales"><BsLinkedin></BsLinkedin></a>
                   <a  target="_blank" href="https://github.com/JtoralesK?tab=repositories"><FaGithubSquare></FaGithubSquare></a>
                   <a target="_blank" className="cv" href="src/cv/cv.pdf"><VscFilePdf></VscFilePdf></a>
              
               </div>
            </div>
        </footer>
    )
}
export {Footer};