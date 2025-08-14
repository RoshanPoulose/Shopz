import React, { useContext, useEffect, useState } from "react";
import { asset } from "../assets/asset";
import { ShopContext } from "../context/ShopContext";
import Product from "../pages/Product";
import ProductsItem from "./ProductsItem";
   
const OurProduct = () => {
  const { products } = useContext(ShopContext);

  const [visibleCount, setVisibleCount] = useState(8);
  
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };    
 
       
  return (    
    <div className="flex flex-col gap-[32px] pb-76px">
      <h1 className=" mt-[51px] text-center font-bold text-[40px]">
        Our Products            
      </h1>
      <div className="px-[7.08%] gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  justify-center items-center ">
        {products.slice(0,visibleCount).map((item, index) => (            
          <ProductsItem     
            key={index}                               
            id={item.id}                           
            image={item.image}  
            name={item.title}             
            price={item.price}                 
            ogprice={item.originalPrice}       
            discountprice={item.discountPercent}                  
            description={item.shortDescription}                  
          />                  
        ))}           
      </div>           
      <div className="flex items-center justify-center">    
        <button onClick={handleShowMore} className="mt-[32px] cursor-pointer w-[245px] px-78px border border-[#B88E2F] py-12px font-semibold text-[16px] text-[#B88E2F] text-center">
          Show more         
        </button>                              
      </div>     
    </div>  
  );
};
    
export default OurProduct;
