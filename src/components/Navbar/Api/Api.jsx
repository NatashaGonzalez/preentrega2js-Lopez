import React, { useEffect, useState } from "react";
import ItemListContainer from "../ItemListContainer";


export default function Api () {

    const [user, setUser] = useState({});

        useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((respuesta) => 
        setUser (respuesta.find((user) => user.name === 'Clementina DuBuque'))
	)
    .catch ((error) => console.log(error));
    }, []);
    return (
        <div>
            <p>User= {user.name}</p>
            <ItemListContainer/>
        </div>
    );
}