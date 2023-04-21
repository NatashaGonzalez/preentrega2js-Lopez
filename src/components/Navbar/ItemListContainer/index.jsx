import React from "react";
import Title from "../Title/Title";
import ItemList from "../../ItemList/ItemList";
import {getproducts} from "../../Data/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
const [items, setitems] = useState ([]);
const {categoryId} = useParams()

useEffect (() => {
    getproducts()
    .then ((result) => {
        if(categoryId) {
            setitems (result.filter ((item) => item.category === categoryId))
        } else {
            setitems (result)
        }
    })    
    .catch(error => {
    console.error(error);
    });
}, [categoryId]);
console.log(items);
    return (

        <div>
        <Title greeting={props.texto}/>
        <ItemList items={items}/>
        </div>
    );
}

export default ItemListContainer;