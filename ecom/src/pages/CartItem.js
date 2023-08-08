import React, { useContext } from 'react';
import { ShopContext } from "./ShopContextProvider";
import { useNavigate } from 'react-router-dom';

function CartItem  (props){
  const {ID,Name,Image,Price} = props.data;
  // console.log(props.data)
  const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);

  return (
    <>
   
    <div className="card mb-3" style={{padding:'20px',boxShadow:"1px 1px 10px 4px",margin:"1rem"}}>
    <div className="row no-gutters">
      <div className="col-md-4 col-sm-8" >
        <img src={Image} className="card-img" alt={Name} style={{height:'10rem',width:"auto"}} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text"><strong className="text-muted">&#8377; {Price}</strong></p>
        </div>
      
        <button onClick={()=>removeFromCart(ID)}>&nbsp; - &nbsp;</button>
        <input  style={{maxWidth:"100px"}} value={cartItems[ID]}/>
        <button onClick={()=>addToCart(ID)}>&nbsp; +&nbsp; </button>
      </div>
    </div>
  </div>
  
  </>
  )
}
export default CartItem
