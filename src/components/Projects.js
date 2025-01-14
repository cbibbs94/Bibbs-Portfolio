import React from "react";
import GameCard from "./ProjectsCards/GameCard";
import MadlibCard from "./ProjectsCards/MadlibCard";
import RantCard from "./ProjectsCards/RantCard";
import SiteCard from "./ProjectsCards/SiteCard";
import GameStack from "./ProjectsStacks/GameStack";
import MadlibStack from "./ProjectsStacks/MadlibStack";
import SiteStack from "./ProjectsStacks/SiteStack";
import RantStack from "./ProjectsStacks/RantStack";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card">
        <h3 className="card-header">Sword Logic: Survival of the Mighty </h3>
        <div className="card-imgs">
          <GameCard />
        </div>
        <div className="card-description">
          <div className="tech-stack">
            {/* <ul>
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Tiled</li>
            </ul> */}
            <GameStack/>
          </div>
          <p className="detailed-description">
            Built using HTML Canvas, some light css, and JavaScript classes.
            This project embodies the basic principles of how games are
            developed, by isolating different logics of the game into functional
            class files that all interact with each other. This shares the same
            similarities as languages that are popular for game development like
            Java and C++. The assets and sprites used in this project are open
            source from OpenGameArt.org and the levels were put together using a
            2d sprite editor called Tiled. As of now this project has two levels
            that have been created along with a few NPC sprite characters along
            with a character that is controllable by the User. A small cutscene
            also exists informing the user that the game is still in
            development.
          </p>
        </div>
      </div>
      <div className="card">
        <h3 className="card-header">Madlib Madness</h3>
        <div className="card-imgs">
          <MadlibCard />
        </div>
        <div className="card-description">
          <div className='tech-stack'>
            <MadlibStack />
          </div>
          <div className='detailed-description'>
            Madlib Madness is a group, MERN (Mogno, Express, React, Node ) stack
            program that sets the foundation of a web-based Adlib activity.
            Madlibs is a word game where a player is given a story with words
            removed from the story (EX. NOUNS, VERBS, Adjectives). The player
            then replaces those removed words with the same type of word
            creating a new, wacky story. This site currently provides users with
            the ability to look at all the stories that were created in each
            category. Users also have access to a route that allows them to
            create their own madlib story and submit it to the sites database to
            be reviewd and displayed on the sight. Finally, users have access to
            an example route that allows them to insert words that match the
            input type for a premade story and see how their inputs change the
            story. My roles in this project were Team-Lead, Backend Developer
            and assistant to the Frontend Developer.
          </div>
        </div>
      </div>
      <div className="card">
        <h3 className="card-header">Small Business Site</h3>
        <div className="business-imgs">
          <SiteCard />
        </div>
        <div className="card-description">
          <div className='tech-stack'>
            <SiteStack />
          </div>
          <div className='detailed-description'>
            A backend focused project that puts emphasis on databases and the
            different purposes they can serve in a web application. Exploring
            polyglot database persistence, This business site uses both MongoDB
            and PostgreSQL to manage the data that flows through this website.
            The MongoDB database handles the information that the user submits
            in the consultation form for the site-owner to reference. The
            Postgres database is using the information submitted in the login
            and sign-up form to authenticate users and log them into the
            website.This will later be paired with Reactjs’ useContext feature,
            that will log the user in so that the user can check consultation
            information they sent to the site-owner. As this is a private-client
            project, the site is waiting on design specification from the owner
            and still in development.
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-header">Rest-Rant</h3>
        <div className="restrant-imgs">
          <RantCard />
        </div>
        <div className="card-description">
          <div className='tech-stack'>
            <RantStack/>
          </div>
          <div className='detailed-description'>
            Rest-Rant is a project that was built in two different ways: The
            Full-Stack way and The Server-side Rendering(SSR) way. The server
            side rendered version explores the Models, Views, Controllers(MVC)
            concept of programming that makes it easy to organize your apps by
            the blueprints your data uses(Models), the page and design you are
            sending to the client(Views), and the routes that users navigate the
            site with(Controllers). In the Controllers of this project, I built
            a REST api that allows users to read, edit, update and delete
            entries and comments as data.<br />The FullStack version offers more
            features where I was able implement JavaScript Web Tokens and
            CookieSessions to handle memory storage and data security and
            because the pages that the users see are rendered by the client,
            performance of this app overall improved and was more responsive.
            This school Project was deployed on Heroku while it was still free
            and is currently being worked on to be deployed elsewhere.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
