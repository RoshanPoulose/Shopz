import React from "react";
import { asset } from "../assets/asset";
import { Link } from "react-router-dom";

 
const Breadcrumb = ({ productData }) => {
  return (
    <div className="bg-[#F9F1E7] px-100px py-31px items-center flex">
      <div className="flex items-center gap-[37px] ">
        <div className="flex items-center gap-[8px]">
          <Link
            to="/"
            className="cursor-pointer text-[16px] text-[#9F9F9F] p-2 "
          >
            Home     
          </Link>
          <img src={asset.arrowblack} alt="" />
        </div>
        <div className="flex items-center  gap-[8px]">
          <Link to="/shop" className="text-[16px] text-[#9F9F9F] p-2">
            Shop 
          </Link>          
          <img src={asset.arrowblack} alt="" />   
        </div>       
        <div className="w-[1px] bg-[#9F9F9F] h-[37px]"></div>    
        <div className="">{productData.title}</div>        
      </div>                 
    </div>                    
  );                               
};
          
export default Breadcrumb;
