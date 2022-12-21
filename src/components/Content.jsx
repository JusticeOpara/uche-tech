import React from "react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Blogs from "../Pages/Blogs"
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Projects from "../Pages/Projects";


export default function () {

   return (


      <div className="main-container">
         <div className="left-container">

            <nav className="navbar">
               
                     <a className="nav-btn" href="#Project">Project</a> 
                  
                      <a className="nav-btn" href="#About">About</a>
                     
                     <a className="nav-btn" href="#Contact">Contact</a>
                  
                     <a className="nav-btn" href="#Blogs">Blog</a>
               

               <main className="eye-main">

                  <div className="eyes">
                     <div className="eyelashes"></div>
                     <div className="eyeretina"></div>
                     <div className="eyelash"></div>
                  </div>

                  <div className="eyes">
                     <div className="eyelashes"></div>
                     <div className="eyeretina"></div>
                     <div className="eyelash"></div>
                  </div>

               </main>

            </nav>

            <div className="heading">
               <a>Hi there👋</a>

               <h1 className="intro">I am <span className="hero">Uche.</span></h1>

               <p className="leading">I'm a
                  <span className="text-highlight"> Software Tester </span>
                  well  versed in <span className="text-highlight">designing Test Strategy</span>, Test Plan,
                  review and execution with reporting to all management levels.
               </p>

               <a href="" target="blank" className="download-btn"> Download Resume</a>

               <div className="font-icon">

                  <a className="brands" href="https://twitter.com/man_lik_uch">
                     <FontAwesomeIcon icon={faTwitter} label="twitter"  />
                     <p className="social-icon">Twitter</p>
                  </a>

                  <a className="brands" href="https://instagram.com/arisukwu_uche_anthony_andre_?igshid=YWJhMjlhZTc=" >
                     <FontAwesomeIcon icon={faInstagram} label="instagram" />
                     <p className="social-icon">Instagram</p>
                  </a>

                  <a className="brands" href="https://www.linkedin.com">
                     <FontAwesomeIcon icon={faLinkedin} label="linkedin" />
                     <p className="social-icon">Linkedin</p>
                  </a>

                  <a className="brands" href="https://github.com">
                     <FontAwesomeIcon icon={faGithub} label="github" />
                     <p className="social-icon">Github</p>
                  </a>

               </div>

            </div>

            <div className="footer">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="scale-[2] fill-yellow-300"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Coffee_Cup" dataname="Coffee Cup"><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,
          1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
               <p className="coffee">buy me a Coffee</p>
            </div>

         </div>

         <div className="right-container">

            <Projects />
            <About />
            <Contact />
            <Blogs />


         </div>
      </div>


   )
}