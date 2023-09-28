import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";



const Home = () => {

    //<img className="hero-img" src="/images/homepage/tablet/image-homepage-hero.jpg" alt="hero"/>
    //</div>

   // <img className="hero-img" src="/images/homepage/tablet/image-homepage-hero.jpg" alt="hero" width="460px" height="345px"/>

    return (
        <>  
           <Navbar/>
           <div className="header-container"> 
           
            <div className="line"></div>
           
            
            </div>

            <div className="main">
            <h1 className="hero-title">Welcome to my Page</h1>
            <div className="intro-container">
            <p>
            I'm Aditya, currently pursuing a Master's in Informatics. 
            My journey into industry oriented software engineering began during my 
            last semester of the Bachelor's in Informatics, where I took a course called 
            software engineering. I had the opportunity to work in a team of four to develop 
            a fully functional web application within a set deadline. By following the agile
             methodology, we were able to streamline our working method and create a product 
             that met our expectations adequately. My primary role in this project was
              involved implementing interface functions using vanilla JavaScript. 
              This experience led me to further explore building fully responsive web 
              applications using modern javascript frameworks in both frontend and backend.
               This portfolio is a testament to my journey in exploring various
                JavaScript web frameworks and translating that knowledge into real-world projects.
                 It serves as a comprehensive showcase of my skills in React and Node.js,
                  highlighting the websites I crafted during the summer of 2023, 
                  all while refining my abilities by tackling front-end designs provided 
                  by Frontend Mentor.
                
                
                
                
                   </p>
            </div>

            <div className="thanks-container">
                Thank you for visiting my page!
            </div>

            
            <Link to='/portfolio' className="link1">GO TO PORTFOLIO</Link>
            </div>
           
        </>
      )


}

export default Home;

