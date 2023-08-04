import React from 'react'
import { Link } from 'react-router-dom';


const Home = (props) => {
    let myFashion = props.data
  return (
    <>
        <div className="container">
        <Link to={"/Fashion"} style={{textDecorationLine:"blink"}}><h2 className="h2">Fashion</h2></Link>
          <div className="row">
          {myFashion?.map((val, ind) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-2" key={ind} >
        <div className="card" style={{maxWidth:"300px",padding:"1rem",margin:"1rem 0.2rem"}}>
            <div className="fill" style={{height:"250px"}}>
                <Link to={val.Image} target="_blank"><img className="card-img-top .img" src={val.Image} alt="Card image" style={{ width: "100%",overflowY:"hidden"}}/></Link>
          
          </div>
                <div className="card-body">
                  <p className="">{val.Seller}</p>
                  <h6 className="card-title h6" style={{whiteSpace: "nowrap",overflow:"hidden"}}>{val.Name}</h6>
                  <p className="card-text">&#8377; {val.Price}</p>
                  <p>{val.Delivery}</p>
                  <button className='btn btn-primary'>Add to cart</button>

                  {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                </div>
              </div>
            </div>
          
      );
      
    })}
    </div>
        </div>
</>
  )
}

export default Home
