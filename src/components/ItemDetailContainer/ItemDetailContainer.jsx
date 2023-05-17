import { getProductsById } from "../Data/Data"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [products, setproducts] = useState (null)

    const {idItem} = useParams ();

    useEffect(()=> {
        getProductsById (idItem)
        .then(response => setproducts (response));
    },[idItem])

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer