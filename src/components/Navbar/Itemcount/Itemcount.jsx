import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Itemcount.css";

const Itemcount = (props) => {

    const {data} = props;
    const {title, price, img} = data;
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < 10){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        count > 0? setCount (count -1) : alert ("Ya no queda más stock");
    }

    return (
        <div className='container m-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            $ {price}
        </Card.Text>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        </Card.Body>
        <Button>Comprar</Button>
    </Card>
</div>
)
}

export default Itemcount;