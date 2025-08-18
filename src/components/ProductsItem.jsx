import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { asset } from "../assets/asset";
const ProductsItem = ({
  id,
  imagess,
  name,
  price,  
  ogprice, 
  discountprice,
  description, 
}) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link to={`/product/${id}`}>    
      <div className="group relative">
        <div className="relative overflow-hidden aspect-[285/301]" >  
          <img  
            src={imagess?.[0]}      
            alt=""  
            className="w-full hover:scale-110 transition ease-in-out" 
          />  
          {discountprice !== 0 && (
            <div className="top-[24px] right-[24px] w-[48px] h-[48px] py-[12px] pl-[5px] rounded-full bg-[#E97171] absolute font-medium text-white text-[16px]">
              -{discountprice}%
            </div>
          )}
        </div>       
        <div className="flex flex-col gap-[8px] bg-[#F4F5F7] p-16px">
          <div className="flex flex-col gap-[8px]">  
            <h2 className="font-semibold text-[24px]">{name}</h2>
            <p className=" font-medium  text-[16px] text-gray-300">
              {description}
            </p>
          </div>
          <div className="flex  gap-[16px]">
            <div className="font-semibold text-[20px] whitespace-nowrap">
              {currency} {price}
            </div>
            <div className="text-[16px] text-gray-300 line-through whitespace-nowrap">
              {currency} {ogprice}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[#3A3A3A] white flex opacity-0 group-hover:opacity-80 ">    
          <div className="w-full opacity-100 group-hover:opacity-100 flex flex-col justify-center items-center gap-[24px]">
            <div className="w-[ 14.03%] py-12px px-55px bg-white font-semibold text-[16px] text-[#B88E2F]" >Add to cart</div>
            <div className="flex gap-[20px]">
              <div className="flex font-semibold text-[16px] text-white items-center gap-[4px]"> 
                <img src={asset.vector} className="w-[14px] h-[14px]" alt="" />  
                <div>Share</div> 
              </div>         
              <div className="flex font-semibold text-[16px] text-white items-center gap-[4px]">  
                <img src={asset.arrow} className="w-[14px] h-[14px]"  alt="" />
                <div>Compare</div>        
              </div>
              <div className="flex font-semibold text-[16px] text-white items-center gap-[4px]">
                <img src={asset.heart2} className="w-[14px] h-[14px]" alt="" />  
                <div>Heart</div>  
              </div>  
            </div>
          </div>  
        </div> 
      </div>
    </Link>
  );
};

export default ProductsItem;
