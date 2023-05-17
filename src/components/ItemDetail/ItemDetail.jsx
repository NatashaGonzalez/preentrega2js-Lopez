
const ItemDetail = () => {
    
    return (
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail