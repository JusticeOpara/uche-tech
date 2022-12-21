import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJenkins, faGithub, } from '@fortawesome/free-brands-svg-icons'
import "./pages.css"

export default function About() {

    return (
        <div id="About">
            <h2>ABOUT</h2>
            <p className="profile">My name is Uche Arisukwu Andre.I am an Automation Software QA Tester.
                I have been involved in developing and testing web and mobile applications both manual and automation.
                I maintain a passion for technology and helping others get the most out of technology by using
                the appropriate tools, techniques, and strategies to ensure clients satisfaction.
            </p>
            

            <div className="tech-section">

                <h3>Techologies i currently work with:</h3>

                <div className="techologies-icon">
                    <span className="brands">
                        <FontAwesomeIcon icon={faJenkins} />
                        <p class="icon-text">Jenkin</p>
                    </span>

                    <span className="brands">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" className="appium"
                            viewBox="0 0 256 256"><path fill="#662D91" d="M.295 119.397c24.814 57.004 87.778 66.563 162.925 18.246c34.66 32.08 43.295 
                        70.11 14.374 108.392C162.341 252.451 145.586 256 128 256C57.308 256 0 198.692 0 128c0-2.89.106-5.758.295-8.602Zm117.058-24.744c11.206-46.695
                         42.495-73.48 91.678-65.737c28.67 23.474 46.97 59.14 46.97 99.084c0 50.395-29.127 93.979-71.46 114.857c38.456-54.784 7.03-112.584-67.188-148.204ZM128.001 0c27.435 0 52.85 8.635 73.687 23.33c-69.951-8.132-102.984 
                        50.175-98.37 130.694c-45.452 13.941-82.48 3.669-102.048-44.047C10.03 47.819 63.427 0 128 0Z"/></svg>
                        <p className="icon-text">Appium</p>
                    </span>

                    <span className="brands">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m23.174 3.468l-7.416 8.322a.228.228 0 0 1-.33 0l-3.786-3.9a.228.228 0 0 1 0-.282L12.872 
                        6a.228.228 0 0 1 .366 0l2.106 2.346a.228.228 0 0 0 .342 0l5.94-8.094A.162.162 0 0 0 21.5 0H.716a.174.174 0 0 0-.174.174v23.652A.174.174 0 0 0 .716 
                        24h22.566a.174.174 0 0 0 .174-.174V3.6a.162.162 0 0 0-.282-.132zM6.932 21.366a5.706 5.706 0 0 1-4.05-1.44a.222.222 0 0 1 0-.288l.882-1.236a.222.222 0 
                        0 1 .33-.036a4.338 4.338 0 0 0 2.964 1.158c1.158 0 1.722-.534 1.722-1.098c0-1.752-5.7-.552-5.7-4.278c0-1.65 1.428-3 3.756-3a5.568 5.568 0 0 1 3.708 1.242a.222.222 0 0 1 0 .3l-.906 1.2a.222.222 0 0 1-.318.036a4.29 4.29 0 0 0-2.706-.936c-.906 0-1.41.402-1.41.996c0 1.572 5.688.522 5.688 4.2c.006 1.812-1.284 3.18-3.96 3.18zm12.438-3.432a.192.192 0 0 1-.192.192h-5.202a.06.06 0 0 0-.06.066a1.986 1.986 0 0 0 2.106 1.638a3.264 3.264 0 0 0 1.8-.6a.192.192 0 0 1 .276.042l.636.93a.198.198 0 0 1-.042.264a4.71 4.71 0 0 1-2.892.9a3.726 3.726 0 0 1-3.93-3.87a3.744 3.744 0 0 1 3.81-3.852c2.196 0 3.684 1.644 3.684 4.05zm-3.684-2.748a1.758 1.758 0 0 0-1.8 1.56a.06.06 0 0 0 .06.066h3.492a.06.06 0 0 0 .06-.066a1.698 1.698 0 0 0-1.812-1.56Z"/></svg>
                    <p className="icon-text">Selenium</p>
                    </span>

                    <span className="brands">
                        <FontAwesomeIcon icon={faGithub} />
                        <p className="icon-text">GitHub</p>
                    </span>
                </div>
            </div>
        </div>
    )
}