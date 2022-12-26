import React from "react";
import "./pages.css"
export default function Projects() {
    return (
        <>

            <div className="hero-projects" id="Project">
                <h2 >PROJECTS</h2>

                <div className="project">
                    <p className="project-name">Church App</p>
                    <p className="description">Church app is a christain app that allows
                        christain meet and associate with other christains around the world.</p>
                </div>

                <div className="space"></div>

                <div className="project">
                    <p className="project-name">Sparks App</p>
                    <p className="description">Sparks is a social media app that is built in other to connect
                        with one another around the globe.</p>
                </div>

                <div className="space"></div>

                <div className="project">
                    <p className="project-name">Recharge App</p>
                    <p className="description">whatever whatever whatever is a christain app that allows
                        christain meet and associate with other christains around the world.</p>
                </div>
            </div>
        </>
    )
}