import React, { useContext } from "react";
import Product  from "./Product";
import {Products} from "./database"

const Home = () => {

  return (
    <>
      <div className="container-fluid" style={{ padding: "2vw 5vw" }}>
        <div className="row">
          {Products?.map((product,index) => (
            <Product val={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home
