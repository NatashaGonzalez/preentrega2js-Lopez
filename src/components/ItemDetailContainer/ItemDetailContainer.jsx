import { getProductsById } from "../Data/Data"
import { useContext, useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [products, setproducts] = useState ({});

    const {idproducts} = useParams ();

    useEffect(()=> {
        getProductsById (idproducts)
        .then(response => setproducts (response));
    },[idproducts])

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer