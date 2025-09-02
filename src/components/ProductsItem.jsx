import React, { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { asset } from "../assets/asset";
import Toast from "./Toast";
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
  const { addToCart, isFavourite,setIsFavourite,addToCompare, addToFavourite ,removeFavourite} = useContext(ShopContext);
  const [toast, setToast] = useState(null);   
  const navigate = useNavigate();      
  const goToProduct = () => {   
    navigate(`/product/${id}`);  
  };       
  
  const handleAddToCart = (e) => {  
    e.stopPropagation(); 
    addToCart(id);    
    setToast(`${name} Added to Cart !  🛒 `);
  };      
  const handleAddToCompare = (e) => { 
    e.stopPropagation();
    addToCompare(id);
    setToast(`${name} Added to comapare ! `);
  };

  const handleAddToFavourite = (e) => {
    e.stopPropagation();
    setIsFavourite(!isFavourite)
    addToFavourite(id);
    setToast(`${name} Add to Favourite ❤️ !`);
  };
  return (
    <div onClick={goToProduct}>
      {toast && <Toast message={toast} onclose={() => setToast(null)} />}
      <div className="group relative"> 
        <div className="relative overflow-hidden aspect-[285/301]"> 
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
        <div className="absolute inset-0 bg-[#3A3A3A] white flex opacity-0 group-hover:opacity-80 pointer-events-none group-hover:pointer-events-auto ">
          <div className="w-full opacity-100 group-hover:opacity-100 flex flex-col justify-center items-center gap-[24px]">
            <div
              onClick={handleAddToCart}
              className="w-[ 14.03%] cursor-pointer py-12px px-55px bg-white font-semibold text-[16px] text-[#B88E2F]"
            >      
              Add to cart
            </div>    
            <div className="flex gap-[20px]">
              <div className="flex cursor-pointer font-semibold text-[16px] text-white items-center gap-[4px]">
                <img src={asset.vector} className="w-[14px] h-[14px]" alt="" />
                <div>Share</div>
              </div>
              <div
                onClick={handleAddToCompare}
                className="flex cursor-pointer font-semibold text-[16px] text-white items-center gap-[4px]"
              >
                <img src={asset.arrow} className="w-[14px] h-[14px]" alt="" />
                <div>Compare</div>
              </div>
              <div
                onClick={handleAddToFavourite}  
                className="flex cursor-pointer font-semibold text-[16px] text-white items-center gap-[4px]"
              >  
                <div className="w-[14px] h-[14px]">
                  {" "}   
                  {isFavourite ? (   
                    <FaHeart  onClick={()=>removeFavourite(id)} className="text-red-500 text-lg" />
                  ) : (   
                    <FaRegHeart className="text-gray-400 text-lg" />
                  )}  
                </div>      
                <div>Heart</div>  
              </div>              
            </div>
          </div>      
        </div>  
      </div>    
    </div>
  );  
};

export default ProductsItem;
  