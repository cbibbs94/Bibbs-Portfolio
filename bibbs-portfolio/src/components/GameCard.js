import Card from 'react-bootstrap/Card';
import gameImageOne from '../images/game1.PNG';
import gameImageTwo from '../images/game2.PNG';


const GameCard = () => {
    return (
        <Card style ={{width: "18rem"}}>
            <Card.Img variant='top' src={gameImageOne} height={350} width={550}  />
            <Card.Body>
                <Card.Title> Sword Logic: Survival of The Mighty</Card.Title>
                <Card.Text>
                    This Javascript and HTML based RPG game dives head first into what Obeject Oriented and Class Based programming can really do when correctly implemented

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla bibendum est. Vivamus nec finibus purus. Mauris porttitor imperdiet faucibus. Integer semper dolor nunc, nec pellentesque risus semper vel. Curabitur tincidunt pulvinar bibendum. In sed ante lacinia, vestibulum sapien ut, venenatis sem. Morbi nec iaculis sem. Praesent quis tincidunt orci.
                </Card.Text>
            </Card.Body>
        </Card>
    )
} 


export default GameCard
