import React from 'react';
import restrantImageOne from "../../images/restrant1.PNG";
import restrantImageTwo from "../../images/restrant2.PNG";
import restrantImageThree from "../../images/restrant3.PNG";
import Carousel from 'react-bootstrap/Carousel';

const RantCard = () => {
    return (
      <Carousel slide={false} interval={10000}>
        {/* First Picture */}
        <Carousel.Item>
          <img className="d-block w-100" src={restrantImageOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Comments and Ratings</h3>
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
            <h3>Restaurant Views</h3>
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
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    );
}

export default RantCard;