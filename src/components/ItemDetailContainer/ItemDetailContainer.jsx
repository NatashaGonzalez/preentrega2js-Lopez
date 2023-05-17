import { getProductsById } from "../Data/Data"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [products, setproducts] = useState (null)

    useEffect(()=> {
        getProductsById ('1')
        .then(response => {
            setproducts (response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer