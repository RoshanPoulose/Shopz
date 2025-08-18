import React, { useState, useEffect } from "react";
import { asset, products } from "../assets/asset";
const Productmain = ({ productData }) => {
  const [image, setImage] = useState(productData.imagess?.[0]);
  const [value, setvalue] = useState(1);
  const [size, setSize] = useState(productData.sizes?.[0]);
  useEffect(() => {
    if (productData.imagess?.length > 0) {
      setImage(productData.imagess[0]);
    }
  }, [productData]);
  useEffect(() => {
    if (productData.sizes?.length > 0) {
      setSize(productData.sizes[0]);
    }
  }, [productData]);
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(
    `Check out this product: ${productData.title}`
  );

  return (
    <div className="flex items-center justify-center px-100px py-35px">
      <div className="flex flex-1 gap-[31px] ">
        <div className="flex flex-col w-[10.50%] gap-[32px] ">
          {productData.imagess?.map((item, index) => (
            <img
              className="rounded-[10px]"
              onClick={() => setImage(item)}
              key={index}
              src={item}
            />
          ))}
        </div>
        <img className="w-[68%] rounded-[10px]" src={image} alt="" />
      </div>
      <div className="flex flex-1 flex-col gap-[40px]">
        <div>
          <div>
            <h1 className="text-[42px] ">{productData.title}</h1>
            <p className="font-medium text-[24px] text-[#9F9F9F]">
              Rs.{productData.price}
            </p>
            <div className="flex gap-[16px] mt-[15px] mb-[12px] items-center">
              <div className="flex">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <span
                      className="text-[#FFC700] inline-block w-[20px]  text-[20px] line-clamp-[20px]"
                      key={index}
                    >  
                      {productData.rating >= starValue
                        ? "★"
                        : productData.rating >= starValue - 0.5
                        ? "⯨"
                        : "☆"}  
                    </span>
                  );
                })}
              </div>
              <div className="w-[1px] h-[37px] bg-[#9F9F9F]"></div>
              <div className="text-[13px] text-[#9F9F9F] ">
                {productData.reviews} Customer Review
              </div>
            </div>
            <p className="text-[13px]">{productData.description}</p>
          </div>
          <div className="flex gap-[22px] flex-col">
            <div className="flex flex-col gap-[18px]">
              <div className="mt-[22px] flex flex-col  gap-[12px]">
                <div className="text-[14px] text-[rgb(159,159,159)]">Size</div>
                <div className="flex  gap-[16px]">
                  {productData.sizes?.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSize(item)}
                      className={`cursor-pointer w-[30px] h-[30px] flex items-center justify-center  rounded-[5px] ${
                        size === item
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
                  {productData.colors?.map((item, idx) => (
                    <div
                      className={`cursor-pointer rounded-full w-[30px] h-[30px]`}
                      style={{ background: item }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" flex gap-[18px]">
              <div className="w-[124px] h-[64px] justify-between flex items-center border-[1px] px-[15px] border-[#9F9F9F] rounded-[10px] ">
                <button
                  onClick={() =>
                    setvalue((value) => (value > 0 ? value - 1 : 0))
                  }
                  className="cursor-pointer"
                >
                  -
                </button>
                {value}
                <button
                  onClick={() => setvalue(value + 1)}
                  className="cursor-pointer"
                >
                  +
                </button>
              </div>
              <div className="py-17px px-58px justify-between flex items-center border-[1px] px-[15px] border-black rounded-[10px]">
                Add to Cart
              </div>
              <div className="py-17px px-58px justify-between flex items-center border-[1px] px-[15px] border-black rounded-[10px]">
                + Compare
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          <div className="flex flex-col gap-2">
            <div className="text-[#9f9f9f] flex items-center ">
              <div className="text-[#9f9f9f] text-[16px] w-[75px]">SKU</div>:
              <div className="text-[#9f9f9f] text-[16px] ml-4"> {productData.sku}</div>
            </div>
            <div className="text-[#9f9f9f] flex items-center ">
              <div className="text-[#9f9f9f] text-[16px] w-[75px]">
                Category
              </div>
              :<div className="text-[#9f9f9f] text-[16px] ml-4"> {productData.category}</div>
            </div>
            <div className="text-[#9f9f9f] flex items-center">
              <div className="text-[#9f9f9f] text-[16px] w-[75px]">Tags</div>:
              <div className="text-[#9f9f9f] text-[16px] ml-4">
                {productData.tags?.map((item,idx)=>(<span>{item}{idx<productData.tags.length-1 && ","}</span>))}
                
              </div>
            </div>   
            <div className="text-[#9f9f9f] flex items-center">
              <div className="text-[#9f9f9f] text-[16px] w-[75px]">share</div>:
              <div className="text-[#9f9f9f] text-[16px] ml-4 flex items-center gap-5">
                <img className="cursor-pointer"
                  onClick={() => {
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                      "_blank"
                    );
                  }}
                  src={asset.fb}
                  alt="facebook"
                />
                <img className="cursor-pointer"
                  onClick={() => {
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                      "_blank"
                    );  
                  }}
                  src={asset.li}
                  alt=" linkedIn"
                />
                <img className="cursor-pointer"
                  onClick={() => {
                    window.open(
                      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                      "_blank"
                    );
                  }} 
                  src={asset.tw}
                  alt="twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productmain;
