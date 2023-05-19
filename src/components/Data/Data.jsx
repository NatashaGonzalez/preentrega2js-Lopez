const products =[
    {
id:1,        
title: "Venus",
price: 1000,
img: '../venus.jpg',
category: "exoticas",
description: "Es una planta de roseta pequeña que brota en primavera. Es necesario regarlas diariamente y  temperaturas cálidas de entre 15ºC y 30ºC. "
},
{
id:2,    
title: "Cayena",
price: 900,
img: '../cayena.jpg',
category:"exoticas",
description: "Es un tipo de arbusto. Aunque es de mucha agua, necesita un buen drenaje. Es de temperaturas cálidas. "
},
{
id:3,    
title: "Rosa",
price: 800,
img: '../rosa.jpg',
category:"comunes",
description: "Se debe regar cada día en verano y cada tres días en los meses fríos; al regarlas se debe evitar mojar tanto las flores como hojas. Viven mejor en lugares soleados."
},
{
id:4,
title: "Cala",
price: 1000,
img: '../cala.jpg',
category: "comunes",
description: "Hay que regar la planta una vez cada muchos días, en lugar de inundarla. En los meses cálidos, la cala agradecerá un aporte de fertilizante o abono cada 15 días "
},
{
id:5,
title: "Árbol del caucho",
price: 2000,
img: '../caucho.jpg',
category: "comunes",
descripcion:"Se recomienda humeder la tierra adecuadamente, ya que el riego excesivo puede causarle problemas. Lo mejor es mantener una temperatura de 26°. Por esto son una excelente adición a cualquier hogar u oficina."
},
{
id:6,
title: "Flor Cóleo",
price: 800,
img: '../coleo.jpg',
category: "comunes",
description: "No se recomienda ponerla al sol directamente, sino en un lugar luminoso. Hay que abonarlo cada 15 días para que se mantenga vigoroso y colorido."
},
{
id:7,
title: "Croto",
price: 1800,
img: '../croto.jpg',
category: "exoticas",
description: "Requiere de un riego abundante en verano y semanal en invierno. También se debe tener en un lugar donde tenga la luz garanrizada."
},
{
id:8,
title: "Dalia",
price: 850,
img: '../dalia.jpg',
category: "comunes",
description: "Se riega con frecuencia y en abundancia sin mojar las flores y hojas. Es mejor tenerlas en un lugar donde recibe sol en la mañana y sombra en la tarde."
},
{
id:9,
title: "Jazmín",
price: 900,
img: '../jazmin.jpg',
category: "comunes",
description:"Es un atractivo arbusto de flores amarillas y follaje verde. Requiere de un suelo húmedo pero no en exceso."
},
{
id:10,
title: "Lavanda",
price: 850,
img: '../lavanda.jpg',
category: "comunes",
description:"Es un arbusto de aroma característico. Sus flores se forman a partir de la primavera y durante todo el verano. Hay que suministrarle agua más o menos cada 2 semanas o cuando se vea que la tierra esté completamente seca."
},
{
id:11,
title: "Malvon",
price: 950,
img: '../malvon.jpg',
category: "comunes",
description:"Es un planta decorativa. Se pueden tener en el exterior siempre y cuando esté protegida del viento y de las heladas."
},
{
id:12,
title: "Orquídea",
price: 2000,
img: '../orquideas.jpeg',
category: "exoticas",
description:"Son plantas tropicales que se caracterizan por sus populares flores. Necesitan estar en un lugar bien iluminado donde no reciban sol directo. Además se riegan una vez a la semana."
},
{
id:13,
title: "Pensamientos",
price: 1500,
img: '../pensamiento.jpg',
category: "comunes",
description:"Son flores de cinco pétalos y colores diversos pueden llegan a durar hasta 4 meses. Sedebe mantener la tierra relativamente húmeda, pero nunca encharcada."
},
{
id:14,
title: "Potus",
price: 1500,
img: '../potus.jpg',
category: "comunes",
description:"Es una planta de hoja perenne con forma de corazón; puede estar dentro o fuera de la casa. No es exigente con los riegos, por eso hay que hacerlo cuando la tierra esté seca. También requiere un lugar luminoso."
},
{
id:15,
title: "Trinitaria",
price: 2500,
img: '../trinitaria.jpg',
category: "exoticas",
description:"Es un arbusto trepador de hojas y flores perennes. Estas plantas florecen cuando son cultivadas a pleno sol y basta con regarlas 1 o 2 veces por semana."
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