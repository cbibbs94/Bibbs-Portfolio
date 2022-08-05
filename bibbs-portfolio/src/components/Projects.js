import React from 'react'
import gameImageOne from '../images/game1.PNG'
import gameImageTwo from '../images/game2.PNG'


const Projects = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <div className='game'>
                <h3>Sword Logic: Survival of the Mighty </h3>
                <div id='game-media'>
                    <img src={gameImageTwo} alt='game-two' height={350} width={550} />
                    <img src={gameImageOne} alt='game-one' height={350} width={550} />
                </div>
                <div id='game-description'>
                    <p>
                        This Javascript and HTML based RPG game dives head first into what Obeject Oriented and Class Based programming can really do when correctly implemented.

                        </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla bibendum est. Vivamus nec finibus purus. Mauris porttitor imperdiet faucibus. Integer semper dolor nunc, nec pellentesque risus semper vel. Curabitur tincidunt pulvinar bibendum. In sed ante lacinia, vestibulum sapien ut, venenatis sem. Morbi nec iaculis sem. Praesent quis tincidunt orci. Integer blandit quam non metus dignissim vehicula. Sed dictum feugiat nisi ut ultrices. Praesent accumsan condimentum urna nec sollicitudin. In nunc risus, vehicula ac orci in, scelerisque ullamcorper est. Nunc id risus et arcu dignissim sagittis. Morbi metus elit, malesuada non bibendum quis, rhoncus ac ipsum. Phasellus lacus ex, mollis eu velit eget, consectetur sollicitudin libero. <br/>

                    Nulla consectetur lorem tempor felis mattis, et egestas augue facilisis. Pellentesque sit amet bibendum nunc. Nulla a mauris et urna luctus lobortis a eget diam. Aenean interdum lectus id diam efficitur, ut commodo lectus consequat. Proin a urna luctus, molestie nibh vel, consequat magna. Mauris risus ipsum, vulputate eu hendrerit id, mattis quis ex. Ut sit amet eros eget ligula viverra vestibulum lobortis in dui. Nulla iaculis risus sit amet leo venenatis aliquam. Nullam eget dui elementum, gravida dui vel, sodales odio. Nulla nec rhoncus nulla. Phasellus pellentesque lacus id venenatis scelerisque. Quisque sollicitudin ipsum ut eleifend lacinia. Ut pretium, lacus non tristique scelerisque, odio urna commodo eros, in posuere nunc sem vel mauris. Nam non molestie massa.<br/>

                    Fusce semper, tellus a consectetur dapibus, ligula magna lobortis diam, vel pretium neque nulla a ante. In euismod sagittis vehicula. Nulla non massa pretium odio ullamcorper ultricies. Duis fringilla elementum faucibus. Aliquam erat volutpat. Nulla consequat tincidunt libero, vel placerat velit venenatis non. Duis et suscipit nisl. <br/>

                    Vivamus quam mauris, consequat a tellus non, hendrerit hendrerit libero. Praesent a semper mi, et maximus magna. Mauris tempus justo et libero iaculis, vel cursus odio fringilla. Duis sit amet maximus dui. Nam at convallis sem. Sed lacinia lacus non lorem luctus viverra. Vestibulum vitae tempor erat, at euismod dolor. Sed efficitur, diam vel ultricies dictum, lorem felis pellentesque mauris, vel vehicula dui sapien sed nulla.<br/>

                    Donec tincidunt dapibus nisl vitae accumsan. Nulla rhoncus velit vel ipsum varius imperdiet in id orci. Phasellus eget ante varius, malesuada felis ut, blandit erat. Maecenas cursus iaculis diam, non porttitor nisi aliquet a. Phasellus quis velit finibus, mollis massa sit amet, bibendum diam. Ut id diam et neque dignissim tincidunt maximus eu enim. Curabitur bibendum urna mollis magna tincidunt, vel tempor arcu placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ac congue urna, ut accumsan nisi. Quisque ac dapibus odio.<br/>
                    </p>
                </div>
            </div>
            <div className='madlib'></div>
            <div className=''></div>
        </div>
    )
}

export default Projects;