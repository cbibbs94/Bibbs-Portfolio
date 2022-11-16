
import gameImageOne from '../images/game1.PNG';
import gameImageTwo from '../images/game2.PNG';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';


function GameCard() {
    return (
      <Carousel>
        {/* First Picture */}
        <Carousel.Item>
          <img className='d-block w-100' src={gameImageOne} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second Picture */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gameImageTwo}
            alt="Second slide"
            
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
} 


export default GameCard
