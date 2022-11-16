import React from 'react'
import businessOne from "../../images/business1.PNG";
import Carousel from 'react-bootstrap/Carousel';


function SiteCard() {
    return (
      <Carousel slide={false} interval={15000}>
        {/* First Picture */}
        <Carousel.Item>
          <img 
            className='d-block w-100' 
            src={businessOne} 
            alt="First slide" 
          />
          {/* First caption */}
          <Carousel.Caption>
            <h3>First Business label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>      
      </Carousel>
    );
} 


export default SiteCard;
