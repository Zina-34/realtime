import React , {useContext} from 'react'
import {Scrollbars} from 'react-custom-scrollbars-2' ;
import Items from "./Items";
import {CartContext} from './Cart';
import Head from './Header/Head';

const ContextCart = () => {
  
  const {item,totalAmount, clearCart, totalItem  , checkout} = useContext(CartContext);

  return (
    <>
    <Head />
    <div className="cartall">
        
      

        <section className="main-cart-section">
            <div className="cartShop">
                <h1 className="h1">Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">{ totalItem }</span> items in shopping cart</p>
            </div>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars >

                            {
                                item.map((curItem) =>{
                                    return <Items key={curItem.id} {...curItem}/>
                                })
                            }

                            

                        </Scrollbars>

                    </div>
                </div>

                <div className="card-total">
                    <h5>Total: <span>Rs {totalAmount}</span></h5>
                    <button className="submit-carts"onClick={checkout}>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>


            </section>
        </div>
    </>
  )
}

export default ContextCart
