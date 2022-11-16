import React from 'react';
import madlibImageOne from "../../images/madlib1.PNG";
import madlibImageTwo from "../../images/madlib2.PNG";
import Carousel from 'react-bootstrap/Carousel';

const MadlibCard = () => {
    return (
      <Carousel slide={false} interval={15000}>
        {/* First Picture */}
        <Carousel.Item>
          <img className="d-block w-100" src={madlibImageOne} alt="First slide" />
          <Carousel.Caption>
            <h3>First Madlib Image</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second Madlib label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default MadlibCard