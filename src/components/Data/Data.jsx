const products =[
    {
id:1,        
title: "Venus",
price: 1000,
img: '../venus.jpg',
category: "exoticas"
},
{
id:2,    
title: "Cayena",
price: 900,
img: '../cayena.jpg',
category:"exoticas"
},
{
id:3,    
title: "rosa",
price: 800,
img: '../rosa.jpg',
category:"especies"
}
    ];

    export const getproducts = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve (products)
            }, 1000);
        })
    }