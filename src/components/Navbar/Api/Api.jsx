import React, { useEffect, useState } from "react";

function Api () {

    const [api, setApi] = useState ();
    console.log(api);
        useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) => {
		setApi (data)
	});
    }, [])

    return (
        <div>{api && api.name} </div>
    )
}

export default Api;