import React from "react"

const About = ()=>{
    return (
        <div id="aboutMe" className="a">
             <div className="a-left"> 
                 <div className="a-card">
                     <img className="a-img" src="https://res.cloudinary.com/apxschool/image/upload/v1650995001/xo4ba9xgmb8kxzkhduvj.jpg" alt="" />
                 </div>
            
             </div>
             <div className="a-right">
                 <div className="a-about">
                     <h1>About me</h1>
                     <p>Me is defined as one's self when the speaker is re
                         ferring to himself or herself. An example of me used as a
                          pronoun is in the sentence, "He went to buy ice cream for me,
                          " which means he went to buy ice cream for the person who is speaking. 
                         pronoun. Middle English. abbreviation.</p>
                         <div className="apx">
                             <img className="apx-img" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGk_j92h0gI1w/company-logo_200_200/0/1627516077948?e=2147483647&v=beta&t=hqL_1sGyfZ9DvAwPlGOYLFeOxyJCFhoUmy5fnk_BGPw" alt="" />
                             <div className="content">
                                 <h4 className="apx-title">Apx School</h4>
                                 <p className="apx-p">Carrera Web Fullstack</p>
                             </div>
                         </div>
                         <div className="utn">
                             <img className="utn-logo" src="https://pbs.twimg.com/profile_images/378800000468818939/6c6ec23e6d9534c519788e0e35bccadd_400x400.jpeg" alt="" />
                             <div className="content">
                                 <h4 className="apx-title">UTN</h4>
                                 <p className="apx-p">Tecnicatura en Programación</p>
                             </div>
                         </div>
                 </div>
             </div>

        </div>
    )
}
export {About}