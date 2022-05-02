import React from "react"
type Prop={
    children:JSX.Element[]
}
const Pg= (props:Prop)=>{
    return <div className="pantallasGrandes">{props.children}</div>
}
export {Pg}