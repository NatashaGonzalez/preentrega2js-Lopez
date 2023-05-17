import React, { useState } from 'react';
import "./Itemcount.css";
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Itemcount = (props) => {

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
        
        <div className='boton'>

        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <Button>Comprar</Button>
        <NavLink to={`/item/${product.id}`}>
            <button>Detalles</button>
        </NavLink>
        </div>
    )
}

export default Itemcount;