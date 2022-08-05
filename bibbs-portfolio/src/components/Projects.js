import React from 'react'

const Projects = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className='game'>
                <div className='game-media'>
                <img src={'bibbs-portfolio\\public\\images\\game1.PNG'} alt='game one'/>
                </div>
                <div className='game-description'>
                    <h3>Sword Logic: Survival of the Mighty </h3>
                    <p>
                        This Javascript and HTML based RPG game dives head first into what Obeject Oriented and Class Based programming can really do when correctly.</p>
                    <p>
                        Using multiple classes and class constructors, this project build pixelated worlds and characters on HTML canvas. lorem impsum
                    </p>
                </div>
                
            </div>
            <div className='madlib'></div>
            <div className=''></div>
        </div>
    )
}

export default Projects;