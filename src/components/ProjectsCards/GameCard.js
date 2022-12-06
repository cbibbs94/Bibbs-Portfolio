import React from "react";
import gameImageOne from "../../images/game1.PNG";
import gameImageTwo from "../../images/game2.PNG";

import Carousel from "react-bootstrap/Carousel";

function GameCard() {
  return (
    <Carousel slide={false} interval={10000}>
      {/* First Picture */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gameImageOne}
          alt="Game First slide"
        />
        {/* First caption */}
        <Carousel.Caption>
          <h3>Opening Level</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Second Picture */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gameImageTwo}
          alt="Game Second slide"
        />
        {/* Second Caption */}
        <Carousel.Caption>
          <h3>Second Level</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GameCard;
