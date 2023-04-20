import React from "react";
import Title from "../Title/Title";
import ItemList from "../../ItemList/ItemList";
import {getproducts} from "../../Data/Data";
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
const [items, setitems] = useState ([]);

useEffect (() => {
    getproducts()
    .then ((result) => {
        setitems (result);
        })
        .catch(error => {
        console.error(error);
        });
}, []);
console.log(items);
    return (

        <div>
        <Title greeting={props.texto}/>
        <ItemList items={items}/>
        </div>
    );
}

export default ItemListContainer;