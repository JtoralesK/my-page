import React from "react"
type Prop = {
    children:JSX.Element,
}
const Header = (prop:Prop)=>{
    return (
        <header className="header">
             <div ><a className="header_miNombre" href="#">YourDev</a></div>
            <nav className="nav">
                <ul className="nav_ul">
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#aboutMe">About Me</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
               </nav>
            {prop.children}
        </header>
    )
}
export {Header};