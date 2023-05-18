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
title: "Rosa",
price: 800,
img: '../rosa.jpg',
category:"comunes"
},
{
id:4,
title: "Cala",
price: 1000,
img: '../cala.jpg',
category: "comunes"
},
{
id:5,
title: "Árbol del caucho",
price: 2000,
img: '../caucho.jpg',
category: "comunes"
},
{
id:6,
title: "Flor Cóleo",
price: 800,
img: '../coleo.jpg',
category: "comunes"
},
{
id:7,
title: "Croto",
price: 1800,
img: '../croto.jpg',
category: "exoticas"
},
{
id:8,
title: "Dalia",
price: 850,
img: '../dalia.jpg',
category: "comunes"
},
{
id:9,
title: "Jazmín",
price: 900,
img: '../jazmin.jpg',
category: "comunes"
},
{
id:10,
title: "Lavanda",
price: 850,
img: '../lavanda.jpg',
category: "comunes"
},
{
id:11,
title: "Malvon",
price: 950,
img: '../malvon.jpg',
category: "comunes"
},
{
id:12,
title: "Orquídea",
price: 2000,
img: '../orquideas.jpeg',
category: "exoticas"
},
{
id:13,
title: "Pensamientos",
price: 1500,
img: '../pensamiento.jpg',
category: "comunes"
},
{
id:14,
title: "Potus",
price: 1500,
img: '../potus.jpg',
category: "comunes"
},
{
id:15,
title: "Trinitaria",
price: 2500,
img: '../trinitaria.jpg',
category: "exoticas"
},
];

    export const getproducts = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve (products)
            }, 1000);
        })
    }

    export const getProductsById = (productsId) => {
        return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === parseInt(productsId)));
        }, 500);
        });
    };