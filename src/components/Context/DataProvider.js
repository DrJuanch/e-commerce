import { createContext, useState,useEffect } from "react";
import Data from '../../Data'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products,setProducts] = useState([])
    const [menu,setMenu] = useState(false)
    const [cart,setCart] = useState([])

    useEffect(() =>{
        const product = Data.items
        if (product){
            setProducts(product)
        }else{
            setProducts([])
        }
    },[])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id
        })
        if (check){
            const data = products.filter(product => {
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    const value = {
        products : [products],
        menu : [menu, setMenu]
    }


    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}
