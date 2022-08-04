import React from 'react'

function Skills() {
    return (
        <div className='skills'>
            <h2>Skills</h2>
            <ul>
                <li>Languages:
                    <ul>
                        <li>Javascript</li>
                        <li>Python3</li>
                        <li>HTML5</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>CSS</li>
                    </ul>        
                </li>
                <li>Databases and ORMs
                    <ul>
                        <li>NoSQL
                            <ul>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </li>
                        <li>SQL
                            <ul>
                                <li>Postgres</li>
                                <li>Sequelize</li>
                            </ul>
                        </li>
                        <li>Polyglot Database Persistence</li>
                    </ul>
                </li>
                <li>Frameworks
                    <ul>
                        <li>Node,js</li>
                        <li>React.js</li>
                    </ul>
                </li>
                <li>Other tools
                    <ul>
                        <li>Heroku</li>
                        <li>MERN</li>
                        <li>REST APIs</li>
                        <li>Git and Github</li>
                        <li>Debugging</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Skills;