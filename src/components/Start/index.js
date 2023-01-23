import React from "react";
import { Link } from "react-router-dom";
import Portada2 from '../../Assets/Portada2.png'
export const Start = () => {
    return(
        <div className="home">
            <Link to="/">
                <h1 className="tittle">Inicio</h1>  
            </Link>
            <Link to="/Productos">
                <h1 className="tittle">Productos</h1>
            </Link>
            <img src={Portada2} alt="Portada"/>
        </div>
    )
}