import { createContext, useEffect, useState } from "react";
import { compare, products, slides } from "../assets/asset";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rp";
  const [CartItems, SetCartItems] = useState({});
  const [favourite, setFavourite] = useState([]);
  const [compareItems, setCompareItems] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isFavourite, setIsFavourite] = useState({});
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
  const addToFavourite = async (itemId) => {
    let itemData = structuredClone(favourite);
    if (itemData[itemId]) {
      if (itemData[itemId]) {
        itemData[itemId] += 1;
      } else {
        itemData[itemId] = 1;
      }
    } else {
      itemData[itemId] = 1;
    }
    setFavourite(itemData);
  };

  // const addToFavourite =(itemId)=>{
  //   if(!favourite.includes(itemId)){
  //     setFavourite([...favourite,itemId])
  //   }
  // }

  const removeCart = (itemId, size) => {
    let cartData = structuredClone(CartItems);
    if (cartData[itemId] && cartData[itemId][size]) {
      delete cartData[(itemId, size)];
      if (Object.keys(cartData[itemId].length === 0)) {
        delete cartData[itemId];
      }
    }
    SetCartItems(cartData);
  };

  const removeFavourite = (itemId) => {
    let favouriteData = { ...favourite };
    if (favouriteData[itemId]) {
      delete favouriteData[itemId];
      setFavourite(favouriteData);
    }
  };
  // const removeFavourite=(itemId)=>{
  //   setFavourite(favourite.filter((id)=>id !== itemId))
  // }
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in CartItems) {
      for (const item in CartItems[items]) {
        try {
          if (CartItems[items][item] > 0) {
            totalCount += CartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  }; 
  const getFavouriteDetails = () => {
    let FavouriteDetails = [];
    for (const productId in favourite) {
      const quantity = favourite[productId];
      if (quantity > 0) {
        const product = products.find((item) => item.id === Number(productId));
        if (product) {
          FavouriteDetails.push({
            id: product.id,   
            title: product.title,
            image: product.imagess?.[0],
            price: product.price,  
            quantity: quantity,
          });
        }
      }
    }
    return FavouriteDetails;
  };

  const getCartdetails = () => {
    let cartDetails = [];
    for (const productId in CartItems) {
      for (const size in CartItems[productId]) {
        const quantity = CartItems[productId][size];
        if (quantity > 0) {
          const product = products.find(
            (item) => item.id === Number(productId)
          );
          if (product) {
            cartDetails.push({
              id: product.id,
              title: product.title,
              image: product.imagess?.[0],
              price: product.price,
              size: size,
              quantity: quantity,
              total: product.price * quantity,
            });
          }
        }
      }
    }

    const grandTotal = cartDetails.reduce((sum, item) => sum + item.total, 0);
    return { cartDetails, grandTotal };
  };

  const addToCompare = (productId) => {
    if (!compareItems.includes(productId)) {
      setCompareItems([...compareItems, productId]);
    }
  };

  const getCompareDetails = () => {
    return compareItems.map((id) => products.find((p) => p.id === id));
  };

  const value = {
    products,
    currency,
    slides,
    CartItems,
    compare,
    CartItems,
    favourite,
    compareItems,
    search,
    showSearch,
    isFavourite,
    setShowSearch,
    setSearch,
    addToCart,
    addToCompare,
    getCartCount,
    getCartdetails,
    removeCart,
    removeFavourite,
    addToFavourite,
    getFavouriteDetails,
    getCompareDetails,
    setIsFavourite,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
