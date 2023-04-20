import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Itemcount.css";

const Itemcount = (props) => {

    const {data} = props;
    const {title, price} = data;
    const [stock, setstock] = useState(10);

    const increment = () => {
        if (stock <= 0){
            setstock(stock + 1);
        }
    }

    const decrement = () => {
        stock > 0? setstock (stock -1) : alert ("Ya no queda más stock");
    }

    return (
        <div className='container m-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src=""/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            $ {price}
        </Card.Text>
        <button onClick={decrement}>-</button>
        <p>{stock}</p>
        <button onClick={increment}>+</button>
        </Card.Body>
        <Button className='boton'>Comprar</Button>
    </Card>
</div>
)
}

export default Itemcount;