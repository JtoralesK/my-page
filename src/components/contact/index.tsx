import React ,{useRef} from "react"
import { FaPhoneAlt,FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
const Contact = ()=>{
    const formRef = useRef();
    const handle = (e)=>{
        e.preventDefault()
        console.log( formRef.current);
        
        emailjs.sendForm('service_rrn9fsv', 'template_73vde55', formRef.current,"4yp1M_2eK4hKGje13")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
         <div id="contacto" className="c">
            <div className="bar"></div>
            <div className="c-wrapper">
                <div className="c-left-wrapper">
                    <h1 className="c-title">Contactame </h1>
                    <div className="c-type">
                        <div className="type-phone">
                            <FaPhoneAlt  className="icon"/>
                            <p className="afterIcon">+1124670573</p>
                        </div>
                        <div className="type-phone">
                            <IoIosMail  className="icon"/>
                            <p className="afterIcon">jtorales2016@gmail.com</p>
                        </div>
                        <div className="type-phone">
                            <FaMapMarkerAlt  className="icon"/>
                            <p className="afterIcon">Buenos Aires, Argentina</p>
                        </div>
                    </div>
                </div>
                <div className="c-right-wrapper">
                        <form ref={formRef} className="form" onSubmit={handle} >
                            <div className="c-right-responsive">
                            <input className="input" type="text" placeholder="Nombre y apellido" name="name" required/>
                            <input className="input" type="text" placeholder="Tema" name="subject" required/>
                            </div>
                            <input className="input email" type="email" placeholder="Email" name="email" required />
                            <textarea className="textarea" name="message"  rows={5} placeholder="Mensaje"  required/>
                            <button className="c-button">submit</button>
                        </form>
                </div>

            </div>
            
        </div>)
}
export {Contact};