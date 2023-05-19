import React, { useState } from 'react';
import "./Itemcount.css";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';



const Itemcount = (cuenta) => {

    const [count, setCount] = useState(1);
    
    const increment = () => {
        if (count < 10){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        count > 0? setCount (count -1) : alert ("Ya no queda más stock");
    }

    //const addBtnAction = () => {

 //       toast.info('Añadido al carrito', {
   //         position: "top-center",
     //       autoClose: 3000,
       //     hideProgressBar: false,
         //   closeOnClick: true,
 //           pauseOnHover: true,
   //         draggable: true,
     //       progress: undefined,
       //     theme: "light",
         //   });
  //  };
  //<ToastContainer />
    
    return (
        
        <div className='boton'>

        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <Button onClick={()=> Itemcount(cuenta)}>Comprar</Button>
        
        </div>
    )
}


export default Itemcount;