import React from 'react'
import './HeroSection.css'; // Import CSS file
import CustomButton from '../../Reusable/Button'

const HeroSection = () => {
    return(
            <section className="hero-section">
            <div className="hero-content">
                <h1>Omnia Mohamed</h1>
                <h2>Full Stack devloper</h2>
                <CustomButton className="hero-button" text="Contact Me" onClick={()=> console.log('clicked')}></CustomButton>

            </div>
         </section>
    );
}
export default HeroSection; 
