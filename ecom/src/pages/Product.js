import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from "./ShopContextProvider";

const Product = (props) => {
    // console.log(props.val)
    const {ID,Seller,Name,Colour,Image,Delivery,Price} = props.val;
    const {addToCart,cartItems} = useContext(ShopContext);
 
  return (
   
    <>
        
<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-2"  >
<div className="card" style={{maxWidth:"300px",padding:"0.2rem",margin:"1rem auto"}}>
    <div className="fill" style={{height:"250px"}}>
        <Link to={Image} target="_blank"><img className="card-img-top .img" src={Image} alt="Card image" style={{ width: "100%",overflowY:"hidden"}}/></Link>
  
  </div>
        <div className="card-body">
          <p className="">{Seller}</p>
          <h6 className="card-title h6" style={{whiteSpace: "nowrap",overflow:"hidden"}}>{Name}</h6>
          <p className="card-text">&#8377; {Price}</p>
          <p className="card-text">Colour {Colour}</p>
          <p>{Delivery}</p>
          <button onClick={()=>addToCart(ID)} className='btn btn-primary' style={{width:"150px"}}>{(cartItems[ID] > 0) ?  cartItems[ID]: "Add to cart"}
          </button>

          {/* Add to cart &nbsp;&nbsp;{cartItems[ID] > 0 && cartItems[ID] } */}
        </div>
      </div>
    </div>
    </>
  )
}
export default Product

