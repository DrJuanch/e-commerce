import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/Logo.png'
import { DataContext } from "../Context/DataProvider";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;

    const toogleMenu = () => {
        setMenu(!menu)
    }



    return(
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="LOGO" width="80px"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/Products">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item-total">0</span>
            </div>
        </header>
    )

}