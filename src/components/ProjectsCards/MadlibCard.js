import React from 'react';
import madlibImageOne from "../../images/madlib1.PNG";
import madlibImageTwo from "../../images/madlib2.PNG";
import Carousel from 'react-bootstrap/Carousel';

const MadlibCard = () => {
    return (
      <Carousel slide={false} interval={10000}>
        {/* First Picture */}
        <Carousel.Item>
          <img className="d-block w-100" src={madlibImageOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Madlib Home View</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second Picture */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={madlibImageTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Example madlib Builder</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default MadlibCard