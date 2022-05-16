import React, {useEffect,useState} from "react"
import { About } from "../about/about";
import { Contact } from "../contact";
import {Intro}from"../intro"
import { ListProjects } from "../listProjects";
import { Pg } from "../pantallasGrandes";
import {Header} from"../header"
import { Toggle } from "../toggle";
import { Footer } from "../footer";
const App = ()=>{
    const [mode , setMode] = useState(true)

    const handle =()=>{                
        setMode(!mode)
      }
    
    return (
        <div className={mode?"dark-mode":"normal-mode"}>
        <Pg>
         <Header>
         <Toggle change={handle}/>
         </Header>
         <Intro/>
         <ListProjects/>
         <About/>
         <Contact/>
        </Pg>
         <Footer/>

    
        </div>
    )
}
export{App}