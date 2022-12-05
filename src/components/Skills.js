import React from 'react'
import SkillsIcons from "../components/SkillsIcons"


function Skills() {
    return (
        <div className='skills'>
            <h2>Skills</h2>
            < SkillsIcons />
            <div className='skills-overlay'>
                <div className='skills-overlay-text'>Skills</div>
            </div>
        </div>
    )
}

export default Skills;