import React from 'react'
import images from "../../Assets/images";

export const ProductItem = ({
    id,
    tittle,
    price,
    image,
    category
}) => {
    return (
        <div className="product">
            <a href="#">
                <div className="product-img">
                    <img src={image} alt={tittle} />
                </div>
            </a>
            <div className="product-footer">
                <h1>{tittle}</h1>
                <p>{category}</p>
                <p className='price'>${price}</p>
            </div>
            <div className="button">
                <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    )
}
