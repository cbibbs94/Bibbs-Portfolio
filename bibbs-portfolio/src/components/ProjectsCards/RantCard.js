import React from 'react';
import restrantImageOne from "../../images/restrant1.PNG";
import restrantImageTwo from "../../images/restrant2.PNG";
import restrantImageThree from "../../images/restrant3.PNG";
import Carousel from 'react-bootstrap/Carousel';

const RantCard = () => {
    return (
      <Carousel slide={false} interval={15000}>
        {/* First Picture */}
        <Carousel.Item>
          <img className="d-block w-100" src={restrantImageOne} alt="First slide" />
          <Carousel.Caption>
            <h3>First restrant Image</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* Second Picture */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restrantImageTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second restrant label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Picture */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restrantImageThree}
            alt="third slide"
          />

          <Carousel.Caption>
            <h3>Third restrant label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    );
}

export default RantCard;