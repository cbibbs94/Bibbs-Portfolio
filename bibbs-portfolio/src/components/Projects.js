import React from 'react'
import gameImageOne from '../images/game1.PNG'
import gameImageTwo from '../images/game2.PNG'
import madlibImageOne from '../images/madlib1.PNG'
import madlibImageTwo from '../images/madlib2.PNG'
import business1 from '../images/business1.PNG'
import restrant1 from '../images/restrant1.PNG'
import restrant2 from '../images/restrant2.PNG'
import restrant3 from '../images/restrant3.PNG'



const Projects = () => {
    return (
        <section className='projects'>
            <h2>Projects</h2>
            <div className='game'>
                <h3>Sword Logic: Survival of the Mighty </h3>
                <div id='game-imgs'>
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
            <div className='madlib'>
                <h3>Madlib Madness</h3>
                <div id='madlib-imgs'>
                    <img src={madlibImageOne} alt='madlib-one' height={350} width={550} />
                    <img src={madlibImageTwo} alt='madlib-two' height={350} width={550}/>
                </div>
                <div className='madlib-description'> 
                    <p>
                        Madlib Madness is a group, MERN (Mogno, Express, React, Node ) stack program that sets the foundation of a web-based Adlib activity. Madlibs is a word game where a player is given a story with words removed from the story (EX. NOUNS, VERBS, Adjectives). The player then replaces those removed words with the same type of word creating a new, wacky story. This site currently provides users with the ability to look at all the stories that were created in each category. Users also have access to a route that allows them to create their own madlib story and submit it to the sites database to be reviewd and displayed on the sight. Finally, users have access to an example route that allows them to insert words that match the input type for a premade story and see how their inputs change the story.

                        My roles in this project were Team-Lead, Backend Developer and assistant to the Frontend Developer.
                  
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem ut quam feugiat pulvinar. Praesent semper volutpat augue eget cursus. Duis     rhoncus aliquet dapibus. Aliquam aliquet eu leo sit amet auctor. Proin feugiat diam vel nisi vulputate vestibulum. Morbi vitae lorem ut odio ultrices placerat vulputate sed diam. Ut et placerat felis.

                        In felis ipsum, ultrices sed erat sit amet, efficitur pharetra nisi. Aenean risus nisl, tincidunt vitae nisl nec, sollicitudin imperdiet nibh. Aliquam at facilisis tellus. Ut magna metus, ultrices vitae lobortis at, varius vel arcu. Donec malesuada fringilla felis at luctus. Vivamus luctus, neque in sodales finibus, ipsum est lobortis tellus, rhoncus rhoncus elit sem mattis tellus. Sed bibendum eleifend odio id porttitor. Mauris dignissim ultrices elit, eget egestas enim consectetur eu. In hac habitasse platea dictumst.

                        Duis ac placerat orci. Vestibulum odio tortor, facilisis eu mollis quis, condimentum at ex. Nulla lectus lectus, lobortis non varius id, tempor nec est. Praesent hendrerit laoreet nisi a egestas. Donec sit amet suscipit sem. Maecenas placerat dolor a fermentum tempor. Donec bibendum sem erat, sed sodales ex dapibus quis. Etiam sodales ipsum id turpis gravida, quis mollis nibh cursus. Maecenas egestas, justo sed rhoncus vestibulum, leo orci interdum lectus, eget consectetur nisi justo at magna.

                        Aliquam easadsdadasdsadu augue viverra, malesuada ante ut, imperdiet dui. Phasellus in eleifend leo. Phasellus eget vehicula velit. Mauris egestas metus et ligula ullamcorper, euismod pulvinar nisi tempus. Maecenas tempus velit nec nisi porttitor tempus. Sed id lacus consequat, faucibus quam sit amet, tristique massa. Pellentesque aliquam eros quis malesuada rhoncus. In quis lacus vehicula, lobortis elit eu, scelerisque augue. Integer gravida in purus ut vehicula. Phasellus a leo eu risus egestas imperdiet. Proin tincidunt, lorem et maximus fermentum, odio mi varius ex, id luctus leo ipsum in quam. Morbi euismod vehicula magna at accumsan. Sed consequat suscipit dolor, a commodo quam congue eget. Vestibulum sit amet odio nunc. Ut scelerisque, lorem at pharetra tincidunt, diam lectus placerat diam, quis vulputate felis nisi fringilla odio. Donec et justo vel lacus tempor fermentum.

                        Integer tristique aliquam est, sed condimentum dolor convallis quis. Vestibulum non orci ut mi tempus tempus. Proin ultrices purus ac ex interdum, a venenatis orci sagittis. Nulla at leo in nunc imperdiet maximus. Donec maximus ligula est, ac dignissim nisl molestie at. Pellentesque egestas laoreet augue ut volutpat. Fusce sit amet ligula imperdiet, commodo arcu non, gravida turpis. In nisi mauris, pharetra finibus tristique in, fermentum quis ligula.
                    </p>
                </div>
            </div>
            <div className='business-site'>
                <h3>Small Business Site</h3>
                <div className='business-imgs'>
                    <img src={business1} alt="code base" height={350} width={550} />
                </div>
                <div className='business-description' >
                    <p>
                        Integer tristique aliquam est, sed condimentum dolor convallis quis. Vestibulum non orci ut mi tempus tempus. Proin ultrices purus ac ex interdum, a venenatis orci sagittis. Nulla at leo in nunc imperdiet maximus. Donec maximus ligula est, ac dignissim nisl molestie at. Pellentesque egestas laoreet augue ut volutpat. Fusce sit amet ligula imperdiet, commodo arcu non, gravida turpis. In nisi mauris, pharetra finibus tristique in, fermentum quis ligula.
                    </p>
                </div>
            </div>

            <div className='rest-Rant'>
            <h3>Rest-Rant</h3>
                <div className='business-imgs'>
                    <img src={restrant1} alt="rest rant 1" height={350} width={550} />
                    <img src={restrant2} alt="rest rant 2" height={350} width={550} />
                    <img src={restrant3} alt="rest rant 3" height={350} width={550} />

                </div>
                <div className='business-description'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem ut quam feugiat pulvinar. Praesent semper volutpat augue eget cursus. Duis     rhoncus aliquet dapibus. Aliquam aliquet eu leo sit amet auctor. Proin feugiat diam vel nisi vulputate vestibulum. Morbi vitae lorem ut odio ultrices placerat vulputate sed diam. Ut et placerat felis.

                    In felis ipsum, ultrices sed erat sit amet, efficitur pharetra nisi. Aenean risus nisl, tincidunt vitae nisl nec, sollicitudin imperdiet nibh. Aliquam at facilisis tellus. Ut magna metus, ultrices vitae lobortis at, varius vel arcu. Donec malesuada fringilla felis at luctus. Vivamus luctus, neque in sodales finibus, ipsum est lobortis tellus, rhoncus rhoncus elit sem mattis tellus. Sed bibendum eleifend odio id porttitor. Mauris dignissim ultrices elit, eget egestas enim consectetur eu. In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects;