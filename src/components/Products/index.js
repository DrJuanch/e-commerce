import React, { useContext } from "react";
import { DataContext } from '../Context/DataProvider'
import { ProductItem } from "./ProductItem";

export const Products = () => {

    const value = useContext(DataContext)
    const [products] = value.products

    console.log(products)

    return (
        <>
            <h1 className="tittle">PRODUCTOS</h1>
            <div className="products">
                {
                    products.map(product => (
                        <ProductItem 
                            key={product.id}
                            id={product.id}
                            tittle={product.tittle}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            cantidad={product.cantidad}
                        />
                    ))
                }
            </div>
        </>
    )

}