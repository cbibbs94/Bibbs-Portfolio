import React from "react";
import Carousel from "react-bootstrap/Carousel";
import jsLogo from "../../images/jsLogo.svg";
import cssLogo from "../../images/cssLogo.svg";
import htmlLogo from "../../images/htmlLogo.svg";
import tiledLogo from "../../images/tiledLogo.svg";

const GameStack = () => {
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
      {/* Fourth picture */}
      <Carousel.Item>
        <img className="d-block w-100" src={tiledLogo} alt="Tiled Logo" />
        <Carousel.Caption>
          <h5>Tiled Map Editor</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default GameStack;
