import React from "react";
import { asset } from "../assets/asset";

const Featurebanner = () => {
  return (
    <div className="bg-[#FAF3EA] py-100px flex items-center justify-between px-53px">
      <div className="flex gap-[10px] items-center ">
        <img src={asset.trophy} alt="" />
        <div>
          <div className="font-semibold text-[25px]">High Quality</div>
          <span className="text-[#898989] font-medium text-[20px]">
            crafted from top materials
          </span>
        </div>
      </div>
      <div className="flex gap-[10px] items-center">
        <img src={asset.guarante} alt="" />
        <div>
          <div className="font-semibold text-[25px]">Warranty Protection</div>
          <span className="text-[#898989] font-medium text-[20px]">
            over 2 year
          </span>
        </div>
      </div>
      <div className="flex gap-[10px] items-center">
        <img src={asset.shipping} alt="" />
        <div>
          <div className="font-semibold text-[25px]">Free Shipping</div>
          <span className="text-[#898989] font-medium text-[20px]">
            Order over 150 $
          </span>
        </div>     
      </div>
      <div className="flex gap-[10px] items-center">
        <img src={asset.customersupport} alt="" />
        <div>
          <div className="font-semibold text-[25px]">24/7 Support</div>   
          <span className="text-[#898989] font-medium text-[20px]">
            Dedicated support    
          </span>    
        </div>   
      </div>    
    </div>     
  );     
};   
export default Featurebanner;  
  