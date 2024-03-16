import React from 'react';
import './SkillsSection.css'; // Import CSS file for additional styling if needed
import ProgressBarItem from '../../Reusable/ProgressBar';

const SkillsSection = () => {
    return (
        <section className="skills-section">
            <div className="side-title">
                <h2>My Focus</h2>
                <ul id='ul'>
                    <li id='li'>Back-end devlopment</li>
                    <li>Front-end devlopment</li>
                    <li>Software testing</li>
                  
                </ul>
            </div>
            <div className="skills-content">
                <h2 id='skills'>Skills</h2>
                <p>These are some of my skills </p>
                <div className="progress-bars">
                    <ProgressBarItem skillName="Node-js" progress={60} />
                    <ProgressBarItem skillName="Angular" progress={50} />
                    <ProgressBarItem skillName="Mongo-DB" progress={80} />

                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
