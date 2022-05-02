import React from "react"
const Intro = ()=>{
    return (
        <div  className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi,my name is</h2>
                    <h1 className="i-name">Javier Torales</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer Js</div>
                            <div className="i-title-item">Backend Node js</div>
                            <div className="i-title-item">Frontend React</div>
                            <div className="i-title-item">Developer Fullstack </div>
                        </div>
                    </div>
                    <div className="i-text">
                    Developers work with teams of coders to create software 
                    programs for computers, mobile devices and websites. 
                    They update end-user 
                    software and conduct quality control functions.
                    </div>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bgform"></div>
                <img className="i-img" src="https://www.pngall.com/wp-content/uploads/2016/05/Man-Transparent.png" alt="" />
            </div>
        </div>
    )
}
export {Intro}