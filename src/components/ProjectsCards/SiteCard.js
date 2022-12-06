import React from 'react'
import businessOne from "../../images/business1.PNG";
import Carousel from 'react-bootstrap/Carousel';


function SiteCard() {
    return (
      <Carousel slide={false} interval={10000}>
        {/* First Picture */}
        <Carousel.Item>
          <img 
            className='d-block w-100' 
            src={businessOne} 
            alt="First slide" 
          />
          {/* First caption */}
          <Carousel.Caption>
            <h3>Setup for both ORMs</h3>
          </Carousel.Caption>
        </Carousel.Item>      
      </Carousel>
    );
} 


export default SiteCard;
