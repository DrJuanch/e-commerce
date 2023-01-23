import React, { useContext } from 'react'
import BabuchasBurro from '../../Assets/BabuchasBurro.jpg'
import {DataContext} from '../Context/DataProvider'

export const Cart = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const toogleMenu = () => {
    setMenu(false)
  }
  const show1 = menu ? "shopping-carts show" : "shopping-carts";
  const show2 = menu ? "shopping-cart show" : "shopping-cart";


  return (
    <div className={show1}>
      <div className={show2}>
        <div className='cart-close' onClick={toogleMenu}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className='cart-center'>
          <div className='cart-item'>
            <img src={BabuchasBurro} alt=""/>
            <div>
              <h3>Tittle</h3>
              <p className='price'>$25.000</p>
            </div>
            <div>
              <box-icon name="up-arrow" type="solid"></box-icon>
              <p className='cantidad'>1</p>
              <box-icon name="down-arrow" type="solid"></box-icon>
            </div>
            <div className='remove-item'>
              <box-icon name="trash"></box-icon>
            </div>
          </div>
        </div>
        <div className='cart-footer'>
          <h3>Total: $25000</h3>
          <button className='btn'>Pago</button>
        </div>
      </div>
    </div>
  )
}
