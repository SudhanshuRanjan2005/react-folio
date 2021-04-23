import React from 'react'
import "./css/About.css"
import Avatar from "./images/Avatar.jpeg";

export default function About() {
    return (
        <div className="about">
                <div className="row">
                    <div className="col-lg-4 about-left">
                        <img className="about-avatar" src={Avatar} alt="Avatar"/>
                    </div>
                    <div className="col-lg-8 about-right">
                        <p className="about-intro">
                        Hi there! I am Sudhanshu. Tech enthusiast, Open source code believer and self-taught React Web Developer. 
                        </p>
                        <p className="about-intro">
                        Currently I am pursuing my class '10' from KVs.
                        Being a Tech Enthusiast from my childhood. 
                        I love to build stuffs.
                        I love to do photography 📷, editing, playing badmintion🏸, and much more...😊😊😊
                        </p>
                        <p className="ps">
                        PS - Still waiting for my Hogwarts Acceptance Letter 🦉
                        </p>
                        <hr/>
                        <div className="skills">
                            <p className="skills-about">
                                Some of my skills are:
                            </p>
                            <p className="skills-badge">
                            <span class="badge bg-light text-dark">HTML 5</span>
                            <span class="badge bg-light text-dark">CSS 3</span>
                            <span class="badge bg-light text-dark">JavaScript</span>
                            <span class="badge bg-light text-dark">React</span>
                            <span class="badge bg-light text-dark">Bootstrap</span>
                            <span class="badge bg-light text-dark">Python 🐍</span>
                            </p>

                        </div>
                    </div>
                </div>
        </div>
    )
}
