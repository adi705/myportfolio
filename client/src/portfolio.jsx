import { useState } from "react"
import Navbar from "./navbar"


const Portfolio = () =>{

 return(
    <>
     <Navbar/>
    <div className="items-container">

      <div className="item1">
        <div className="img-container">
            <img className="hero-img" src="/images/gellery_static.jpeg" alt="hero"/>
        </div>

        <div className="content-container">
        <div className="line"></div>

        <h2 className="hero-title">Gallery</h2>

        <div className="intro-container">
            <p> 
            A front end React-based web application, this project elegantly presents 
            artwork through a masonry layout, intuitive slideshow logic, and a captivating 
            lightbox view. Fully responsive, it ensures that  art work shines on all devices.
             The driving inspiration was to create a similar platform, a "Wall of Humor," 
             dedicated to celebrating the greatest stand-up comedy specials of the 21st century, 
             in contrast to traditional art-focused galleries. Overall it was an engaging way to 
             learn CSS Layout skills. It is currently deployed on Netlify.


            </p>
        </div>

        <a href='https://adisgallery.netlify.app/' target="_blank" className='link1'>VIEW PROJECT</a>
        <div className="line"></div>
        </div>

      </div>


      <div className="item2">


      <div className="img-container child">
            <img className="hero-img" src="/images/myteam.jpeg" alt="hero"/>
        </div>

       
         
        <div className="content-container child">
        <div className="line"></div>

        <div className="text-container">
        <h2 className="hero-title">MyTeam</h2>

        <div className="intro-container">
            <p> 

            MyTeam, a fully functional and responsive three-page website is a 
            substantial and feature-rich front-end project, compared to the previous
             front end application. Inspired by the NTNU Bridge platform, 
             the original goal was to build a similar platform tailored for Uit, Tromsø 
             where tech companies have  the ability to express their interest in recruiting 
             students for diverse roles, spanning internships, project-based contracts,
              and full-time positions. As a React application, 
              it boasts an array of pages and components, providing a valuable
               learning  experience in front-end form validation
                and crafting responsive navigation bars. It is currently deployed on Netlify.  
                
                
                
                
                 
               </p>
        </div>

        <a href='https://adisteam.netlify.app/' target="_blank" className='link1'>VIEW PROJECT</a>
        </div>
        <div className="line"></div>
        </div>

       

      </div>

      <div className="item3">
        <div className="img-container">
            <img className="hero-img" src="/images/devjobs.jpeg" alt="hero"/>
        </div>

        <div className="content-container">
        <div className="line"></div>

        <h2 className="hero-title">DevJobs</h2>

        <div className="intro-container">
            <p> 

               
            This  full-stack application, a complimentary app of MyTeam, was meant 
            to provide students with the opportunity to apply for positions offered by companies,
            enriching their education with real-world work experience at Uit, Tromsø. 
            Inspired by NTNU Bridge, it features a React-based frontend that communicates
            with an Express/Node.js server and MongoDB database on the backend. 
            The server exposes two essential API endpoints for job listings
            and individual job details. This project explores common front-end features 
            such as toggle themes and search functionality, offering valuable insights
                into creating responsive MERN applications. It is currently deployed on Render. 
                            
                
                
               </p>
        </div>

        <a href='https://devjobs-l2xb.onrender.com/' target="_blank" className='link1'>VIEW PROJECT</a>
        <div className="line"></div>
       </div>
      </div>

      <div className="item4">

        <div className="img-container">
            <img className="hero-img" src="/images/mymovies.jpeg" alt="hero"/>
        </div>
       

        <div className="content-container child">
         
        <div className="line"></div>
        <div className="text-container">  
        <h2 className="hero-title">MyMovies</h2>

        <div className="intro-container">



            <p> 

            MyMovies is a robust full-stack MERN application designed for users to register,
             login, and conveniently access their bookmarked movies and TV shows. 
             Originally envisioned as "Podfather" to curate the best comedy podcasts so 
             that you are no longer at  the mercy of YouTube’s recommendation system. 
             The application boasts user authentication, common front-end features 
             like search and filters, and a powerful MEAN stack setup utilizing JWT 
             authentication and cookies. The server supports three essential API endpoints 
             for content management, three authentication endpoints for user registration,
              login, and logout, and a user endpoint for retrieving current user data, 
              all integrated into the Node.js backend. It is currently deployed on render.
                
                
                
                
           
               </p>
        </div>

        <a href='https://mymovies-i3v2.onrender.com/' target="_blank" className='link1'>VIEW PROJECT</a>
        </div>  
        <div className="line"></div>
       </div>

      
      </div>

      </div>


    </>
 )

}

export default Portfolio