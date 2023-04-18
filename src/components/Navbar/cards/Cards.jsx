import React from 'react';
import {Button} from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            compra este producto
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>;
</div>
)
}

export default Cards;