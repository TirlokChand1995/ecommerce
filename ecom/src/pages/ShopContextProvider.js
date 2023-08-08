import React, { createContext, useState } from 'react'
import {Products} from "./database"

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for (let i = 1;i<Products.length+1;i++){
        cart[i]=0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    const addToCart = (ID) =>{
        setCartItems((prev)=>({...prev,[ID]:prev[ID]+1}))
    };
    const removeFromCart = (itemId) =>{ 
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
    const totalAmount = () => {
        let amount =0;
        for (let item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = Products.find((product)=>product.ID === +(item));
                amount += cartItems[item]*itemInfo.Price
            }
        }
        return amount;
    };
    
    const contextValue = {cartItems,addToCart,removeFromCart,getDefaultCart,totalAmount};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

 
