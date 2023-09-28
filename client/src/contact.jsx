import ContactForm from "./contactform"
import Navbar from "./navbar"
import customFetch from "./customFetch";
import { useEffect } from "react";



const Contact = () =>{

  

    return(

        <>
           <Navbar/>
           <div className="line contactline"></div>
           <div className="contact-message-container">
           <div className="intro-container contact-container">
            <p>
            I’d love to hear about what you’re working on and how I could help. I’m currently 
  looking for a new role and am open to a wide range of opportunities. I’m a hard-working and positive person 
  who will always approach each task with a sense of purpose and attention to detail. 
  Please do feel free to get in touch  using the form.


            </p>
           </div>

            <ContactForm/>
            </div>
        </>

    )
}

export default Contact