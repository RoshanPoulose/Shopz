import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { asset } from "../assets/asset";
const Listitems = ({
  id,
  imagess,
  name,
  price,
  ogprice,  
  discountprice, 
  description,  
  rating, 
  reviews,
  colors,   
  sizes,
}) => { 
const { currency } = useContext(ShopContext);
  return (     
    <Link to={`/product/${id}`}>
      <div className="  flex flex-col md:flex-row w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="relative  group flex-shrink-0 w-full md:w-[35%] overflow-hidden aspect-[4/3]">
          <img
            src={imagess?.[0]} 
            alt={name}  
            className="w-full h-full object-fit transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          {discountprice !== 0 && (
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#E97171] text-white font-medium text-lg">
              -{discountprice}%
            </div>
          )}
          <div className="absolute inset-0 bg-[#3A3A3A] flex flex-col justify-center items-center gap-6 opacity-0 group-hover:opacity-80 transition-opacity">
            <div className="px-6 py-2 bg-white text-[#B88E2F] font-semibold rounded-md">
              Add to cart
            </div>
            <div className="flex gap-4"> 
              <div className="flex items-center gap-1 text-white font-semibold">
                <img src={asset.vector} className="w-4 h-4" alt="Share" /> Share
              </div>
              <div className="flex items-center gap-1 text-white font-semibold">
                <img src={asset.arrow} className="w-4 h-4" alt="Compare" />{" "}
                Compare
              </div>
              <div className="flex items-center gap-1 text-white font-semibold">
                <img src={asset.heart2} className="w-4 h-4" alt="Heart" /> Heart
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 md:p-6 w-full bg-[#F9FAFB] rounded-r-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
          <div className="flex flex-col gap-2">  
            <h2 className="font-semibold text-xl md:text-2xl">{name}</h2>
            <p className="text-gray-500 text-sm md:text-base">{description}</p>
          </div> 
          <div className="flex gap-[16px] mt-[15px] mb-[12px] items-center">
            <div className="flex"> 
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    className="text-[#FFC700] inline-block w-[20px]  text-[20px] line-clamp-[20px]"
                    key={index}
                  >
                    {rating >= starValue
                      ? "★"
                      : rating >= starValue - 0.5
                      ? "⯨"
                      : "☆"}
                  </span>
                );
              })}
            </div>
            <div className="w-[1px] h-[37px] bg-[#9F9F9F]"></div>
            <div className="text-[13px] text-[#9F9F9F] ">
              {reviews} Customer Review
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="mt-[22px] flex flex-col  gap-[12px]">
              <div className="text-[14px] text-[rgb(159,159,159)]">Size</div>
              <div className="flex  gap-[16px]">
                {sizes?.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSize(item)}
                    className={`cursor-pointer w-[30px] h-[30px] flex items-center justify-center  rounded-[5px] ${
                      sizes === item
                        ? " text-white bg-[#B88E2F]"
                        : "text-black bg-[#F9F1E7]"
                    }`}
                  >
                    {" "}
                    {item}{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="text-[14px] text-[rgb(159,159,159)]">color</div>
              <div className="flex gap-[16px]">
                {colors?.map((item, idx) => (
                  <div
                    className={`cursor-pointer rounded-full w-[30px] h-[30px]`}
                    style={{ background: item }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="font-semibold text-lg md:text-xl">
              {currency} {price}
            </div>
            <div className="text-gray-400 line-through">
              {currency} {ogprice}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Listitems;
