import React from "react";
import linkedinNav from "../images/linkedinNav.svg";
import githubNav from "../images/githubNav.svg";

const ContactBar = () => {
  return (
    <nav>
      <div>
        <a href="https://www.linkedin.com/in/cbibbs317">
          <img src={linkedinNav} alt="Linkedin Icon" id="left-nav-link"   />
        </a>
      </div>
      <div> 
        <h3> Contact Me</h3>
      </div>
      <div>
        <a href="https://github.com/cbibbs94/">
          <img src={githubNav}  alt='Github Icon' id="right-nav-link"   />
        </a>
      </div>
    </nav>
  );
};

export default ContactBar;
