import { createContext, useEffect, useState } from "react";
import { products, slides } from "../assets/asset";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {   
  const currency = "Rp";
  const [CartItems, SetCartItems] = useState({});
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(CartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    SetCartItems(cartData);
  };
  useEffect(() => { 
    console.log(CartItems);
  }, [CartItems]);
  const value = {
    products,
    currency,
    slides,
    CartItems, 
    addToCart,
  }; 
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
