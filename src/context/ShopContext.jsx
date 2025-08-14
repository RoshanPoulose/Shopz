import { createContext } from "react";

import { products, slides } from "../assets/asset";
export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const  currency= 'Rp'       
    const value ={
       products,currency,slides
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider> 
    )
}                    

export default ShopContextProvider;   