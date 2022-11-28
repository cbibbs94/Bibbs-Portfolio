import React from 'react'
// import postgresLogo from '../images/Postgres.svg'
// import JSLogo from "../images/jsLogo.svg"
// import pythonLogo from "../images/pythonLogo.svg"
// import cPlusLogo from "../images/cPlusLogo.png"
// import htmlLogo from "../images/htmlLogo.svg"
// import javaLogo from "../images/javaLogo.svg"
// import githubLogo from "../images/githubLogo.svg"
// import gitLogo from "../images/gitLogo.svg"
// import debuggingLogo from "../images/debuggingLogo.png"
// import cssLogo from "../images/cssLogo.svg"
// import herokuLogo from "../images/herokuLogo.svg"
// import mongoLogo from "../images/mongoLogo.svg"
// import mongooseLogo from "../images/mongooseLogo.svg" 
// import nodeLogo from "../images/nodeLogo.svg"
// import sqlLogo from "../images/sqlLogo.png"
// import reactLogo from "../images/reactLogo.svg"
// import apiLogo from "../images/apiLogo.png"
// import IMAGES from "../index2"
import SkillsIcons from "../components/SkillsIcons"


function Skills() {
    return (
        <div className='skills'>
            <h2>Skills</h2>
            < SkillsIcons />
            {/* <ul>
                <li>Languages:
                    <ul>
                    <li><img src={JSLogo} alt="Javascript" /></li>
                    <li><img src={cssLogo} alt="CSS" /></li>
                    <li><img src={htmlLogo} alt="HTML" /></li>
                    <li><img src={javaLogo} alt="Java" /></li>
                    <li><img src={pythonLogo} alt="Python" /></li>
                    <li><img src={cPlusLogo} alt="c++" /></li>
                    </ul>        
                </li>
                <li>Databases and ORMs
                    <ul>
                        <li>NoSQL
                            <ul>
                            <li><img src={mongoLogo} alt="MongoDB" /></li>
                            <li><img src={mongooseLogo} alt="Mongoose" /></li>
                            </ul>
                        </li>
                        <li>SQL
                            <ul>
                                <li><img src={postgresLogo} alt="postgres logo"/></li>
                                <li><img src={sqlLogo} alt="SQL" /></li>
                            </ul>
                        </li>
                        <li>Polyglot Database Persistence</li>
                    </ul>
                </li>
                <li>Frameworks
                    <ul>
                    <li><img src={reactLogo} alt="React" /></li>
                    <li><img src={nodeLogo} alt="Node.js" /></li>
                    </ul>
                </li>
                <li>Other tools
                    <ul>
                    <li><img src={gitLogo} alt="Git" /></li>
                    <li><img src={githubLogo} alt="GitHub" /></li>
                    <li><img src={apiLogo} alt="API" /></li>
                    <li><img src={herokuLogo} alt="Heroku" /></li>
                    <li><img src={debuggingLogo} alt="Debugging" /></li>
                    </ul>
                </li>
            </ul> */}
            <div className='skills-overlay'>
                <div className='skills-overlay-text'>Skills</div>
            </div>
        </div>
    )
}

export default Skills;