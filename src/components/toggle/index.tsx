import React from "react"
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
type Prop = {
    change:(any)=>any}
const Toggle = (props:Prop)=>{
    const handle = ()=>{
       if(props.change){
          props.change(true)
       }
        
    }
    return (
    <div>
        <button  onClick={handle} className="dark-button">
            <div className="circle-dark"></div>
            <FaSun className="sun"/>
            <BsFillMoonFill/>
        </button>

    </div>)
}
export {Toggle};