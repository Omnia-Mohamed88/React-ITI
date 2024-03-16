import React from "react";
import './AboutMeSection.css'
import CustomButton from "../../Reusable/Button";
const AboutMeSection = () => {
    return (
           <section className="about-me-section">
            <div className="side-title">
                <h2>About Me</h2>
            </div>
            <div className="about-me-content">
                <h3>Full Stack Developer</h3>
                <p>
                    My name is omnia Mohamed , i am student at ITI Open Source Application Devlopemnt Track
                     New capital branch , and am a fesh graduate from Computer Science Helwan  University
                </p>
                <CustomButton className="custom-button"  text="Download Resume" onClick={() => console.log('clicked')} />

            </div>

           </section>
    );
}

export default AboutMeSection