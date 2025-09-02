import React, { useContext, useState } from "react";
import { asset, compare } from "../assets/asset";
import { ShopContext } from "../context/ShopContext";

const ComparisonMain = () => {
  const { getCompareDetails,addToCart } = useContext(ShopContext);
  const compareProduct = getCompareDetails();
  const [open, setOpen] = useState(false);
  const [selectedIndexes, SetSelectedIndexes] = useState([0, 1]);
  const [select, setSelected] = useState("Choose a products");

  const handleSelect = (index) => {
    setOpen(false);
    if (selectedIndexes.includes(index)) return;
    SetSelectedIndexes(([first, second]) => [second, index]);
  };
  return (
    <div className="pt-34px flex items-center justify-center  pb-110px">
      <div className="grid px-100px max-w-[1800px] grid-cols-4">
        <div>
          <div className="px-26px flex h-[330px] flex-col gap-[21px]  pt-15px">
            <h2 className="font-medium pr-30px text-[28px]">
              Go to Product page for more Products
            </h2>
            <div className="font-medium   underline underline-offset-5  text-[20px] text-[#727272]">
              View More
            </div>
          </div> 
          <div>
            {compare.map((head, index) => (
              <div className="border-r border-t  border-[#E8E8E8]">
                <div className="px-[30px] flex flex-col gap-6.5 py-[42px]">
                  <h1 className="font-medium text-[28px]">{head.title}</h1>
                  <div className="flex text-[20px] flex-col gap-[31px]">
                    {head.items.map((item, idx) => (
                      <div>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedIndexes.map((seIndex, col) => (
          <div key={col}>
            {compareProduct.slice(seIndex, seIndex + 1).map((product) => (
              <div key={product.id}>
                <div className="px-26px flex flex-col gap-[18px]">
                  <div className="w-fullrounded-[10px overflow-hidden] ">
                    <img
                      className="w-full  aspect-[28/17]   h-full object-fit"
                      src={product.imagess?.[0]}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-medium pb-1 text-[24px]">
                      {product.title}
                    </h3>
                    <div>Rs. {product.price}</div>
                    <div className="flex gap-[16px]  items-center">
                      <div className="flex font-medium text-[18px]">
                        <div className="flex pr-1 items-center ">
                          {product.rating} 
                        </div>
                        {[...Array(5)].map((_, index) => {
                          const starValue = index + 1;
                          return (
                            <span
                              className="text-[#FFC700] inline-block w-[20px]  text-[20px] line-clamp-[20px]"
                              key={index}
                            >
                              {product.rating >= starValue
                                ? "★"
                                : product.rating >= starValue - 0.5
                                ? "⯨"
                                : "☆"}
                            </span>
                          );
                        })}
                      </div>
                      <div className="w-[1px] h-[37px] bg-[#9F9F9F]"></div>
                      <div className="text-[13px] text-[#9F9F9F] ">
                        {product.reviews} reviews
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-r h-full border-t border-[#E8E8E8]">
                  <div>
                    <div className="flex text-[20px] pb-42px px-60px pt-112px flex-col gap-[31px]">
                      <div>1 sectional sofa</div>
                      <div>TFCBLIGRBL6SRHS</div>
                      <dialog></dialog>
                      <div>Solid Wood</div>  
                      <div>L-shaped</div>
                      <div>Fabric + Cotton</div>
                      <div>Bright Grey & Lion</div>
                    </div>  
                  </div>
                  <div>
                    <div className="flex text-[20px] pb-42px px-60px pt-112px flex-col gap-[31px]">
                      <div>1 sectional sofa</div>    
                      <div>TFCBLIGRBL6SRHS</div>  
                      <div>Solid Wood</div> 
                      <div>L-shaped</div>  
                      <div>hello</div>     
                      <div>Fabric + Cotton</div>            
                      <div>Bright Grey & Lion</div>  
                    </div>      
                  </div>   
                  <div>   
                    <div className="flex text-[20px] pb-42px px-60px pt-112px flex-col gap-[31px]">
                      <div>1 sectional sofa</div>   
                      <div>TFCBLIGRBL6SRHS</div>
                      <div>Solid Wood</div>     
                      <div>L-shaped</div>   
                      <div>Fabric + Cotton</div>  
                      <div>Bright Grey & Lion</div> 
                    </div>
                  </div>
                  <div className="pl-30px"> 
                    <button onClick={()=>addToCart(product.id,product.size?.[0])}  className="px-48px cursor-pointer  text-[20px] py-17px text-white bg-[#B88E2F]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}       
          </div>
        ))}
        <div className="flex px-25px flex-col gap-3">
          <div className="text-base font-medium ">Add A Product</div>
          <div>
            <div   
              onClick={() => setOpen(!open)}
              className="w-[247px] py-2.5 px-3 flex justify-between rounded-lg font-semibold 
               bg-[#B88E2F] text-white     
               focus:outline-none focus:ring-2 focus:ring-[#b88e2f]/70  
               shadow-sm cursor-pointer"
            > 
              <span>{select} </span> 
              <span>▼</span>
            </div>   
            {open && ( 
              <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                {compareProduct.map((item, index) => (
                  <div   
                    key={index} 
                    onClick={() => handleSelect(index)} 
                    className={`px-4 py-2 cursor-pointer ${ 
                      selectedIndexes.includes(index)
                        ? "bg-[#B88E2F] text-white border-4 rounded-2xl"
                        : "text-gray-700 hover:bg-[#B88E2F] hover:text-white"
                    }`}
                  >    
                    {item.title}  
                  </div> 
                ))}  
              </div> 
            )}
          </div>   
        </div>
      </div>
    </div>
  );
};

export default ComparisonMain;
