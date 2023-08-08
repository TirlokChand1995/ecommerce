import React, { useContext } from 'react';
import {Products} from "./database";
import { ShopContext } from "./ShopContextProvider";
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,totalAmount} = useContext(ShopContext);
  const amount = totalAmount();
  const navigatePage = useNavigate();

  return (
    <>
    <div className='container' style={{padding:"2rem",maxWidth:"800px"}}>
      <div className='row'>
        <center><h2 className='h2'>Your Cart Items</h2></center><p></p>
      { Products?.map((product,index)=>{
        if(cartItems[product.ID]!==0){
          return <CartItem data={product} key={index} />
        }
      })
      
}
</div>
    </div>
    <div className='container' style={{marginTop:"2rem",padding:"2rem"}}>
    { amount > 0 ? (
      <div className='row'>
        <div className='col-xxl-4 col-xxl-offset-4' style={{alignContent:"center"}}>
          <center> <h3>Total Amount : &#8377; {amount}  </h3></center>
       <br/><br/>
        <button style={{float:"left"}} className='btn btn-primary' onClick={()=>navigatePage("/")}>Continue Shopping</button>
        <button style={{float:"right"}} className='btn btn-primary'>Checkout</button>
  
        </div>
      </div>
    ) : (<h3>Your Cart Is Empty</h3>)}
    </div>
    </>
  )
}

export default Cart
