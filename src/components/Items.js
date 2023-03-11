import React, {useContext} from 'react'
import {CartContext} from "./Cart";

const Items = ({id,description, title, img, initPrice, price, quantity}) => {

  const {removeItem, increment, decrement} = useContext(CartContext)

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="" />
        </div>

        <div className="title">
          <h2 className="h2">{title}</h2>
          <h5 className="h5">{description}</h5>
        </div>

        <div className="init_price">
          <h6 className="h6">${initPrice}</h6>
        </div>

        <div className="add-minus-quantity">
          <i className="uil uil-minus minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled="disabled"/>
          <i className="uil uil-plus add" onClick={()=>increment(id)}></i>
        </div>

        <div className="price">
          <h6 className="h6">${price}</h6>
        </div>
                            
        <div className="remove-item">
          <i className="uil uil-trash-alt remove" onClick={()=>removeItem(id)}></i>
        </div>


      </div>

        <hr />
      
    </>
  )
}

export default Items
