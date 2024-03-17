// import React from 'react';
// import './SkillsSection.css'; // Import CSS file for additional styling if needed
// import ProgressBarItem from '../../Reusable/ProgressBar';

// const SkillsSection = () => {
//     return (
//         <section className="skills-section">
//             <div className="side-title">
//                 <h2>My Focus</h2>
//                 <ul id='ul'>
//                     <li id='li'>Back-end devlopment</li>
//                     <li>Front-end devlopment</li>
//                     <li>Software testing</li>
                  
//                 </ul>
//             </div>
//             <div className="skills-content">
//                 <h2 id='skills'>Skills</h2>
//                 <p>These are some of my skills </p>
//                 <div className="progress-bars">
//                     <ProgressBarItem skillName="Node-js" progress={60} />
//                     <ProgressBarItem skillName="Angular" progress={50} />
//                     <ProgressBarItem skillName="Mongo-DB" progress={80} />

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SkillsSection;

import React, { useState } from 'react';
import './SkillsSection.css';
import ProgressBarItem from '../../Reusable/ProgressBar';

const SkillsSection = () => {
    const [skills, setSkills] = useState([
        { id: 1, skillName: "Node-js", progress: 60 },
        { id: 2, skillName: "Angular", progress: 50 },
        { id: 3, skillName: "Mongo-DB", progress: 80 }
    ]);

    return (
        <section className="skills-section">
            <div className="side-title">
                <h2>My Focus</h2>
                <ul>
                    <li>Back-end development</li>
                    <li>Front-end development</li>
                    <li>Software testing</li>
                </ul>
            </div>
            <div className="skills-content">
                <h2>Skills</h2>
                <p>These are some of my skills</p>
                <div className="progress-bars">
                    {skills.map((skill) => (
                        <ProgressBarItem key={skill.id} skillName={skill.skillName} progress={skill.progress} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
