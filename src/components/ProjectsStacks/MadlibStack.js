import React from "react";
import Carousel from "react-bootstrap/Carousel";
import jsLogo from "../../images/jsLogo.svg";
import cssLogo from "../../images/cssLogo.svg";
import htmlLogo from "../../images/htmlLogo.svg";
import mongoLogo from "../../images/mongoLogo.svg";
import mongooseLogo from "../../images/mongooseLogo.svg"
import reactLogo from "../../images/reactLogo.svg";



const MadlibStack = () => {
  return (
    <Carousel 
        slide={false} 
        interval={3000} 
        indicators={false}
        controls={false}
    >
      {/* First Picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={jsLogo} alt="Javascript Logo" />
        <Carousel.Caption>
          <h5>JavaScript</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Second Picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={cssLogo} alt="CSS Logo" />
        <Carousel.Caption>
          <h5>CSS</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Third picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={htmlLogo} alt="HTMl Logo" />
        <Carousel.Caption>
          <h5>HTML</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Fifth picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={reactLogo} alt="React Logo" />
        <Carousel.Caption>
          <h5>ReactJs</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Sixth picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={mongoLogo} alt="Monogo Logo" />
        <Carousel.Caption>
          <h5>MongoDB</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Seventh picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={mongooseLogo} alt="Mongoose Logo" />
        <Carousel.Caption>
          <h5>Mongoose</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MadlibStack;
