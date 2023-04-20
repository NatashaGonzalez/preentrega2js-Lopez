const products =[
    {
id:1,        
title: "Venus",
price: 1000,
img: '../venus.jpg'
},
{
id:2,    
title: "Cayena",
price: 900,
img: '../cayena.jpg'
},
{
id:3,    
title: "rosa",
price: 800,
img: '../rosa.jpg'
}
    ];

    export const getproducts = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve (products)
            }, 1000);
        })
    }