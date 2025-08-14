import React from "react";
import { asset } from "../assets/asset";

const Furnitures = () => {
  return (
    <div className="pt-60px pb-50px overflow-hidden">
      <div className="flex items-center justify-center flex-col gap-[8px]">
        <div className="font-semibold text-[#616161] text-[20px]">
          Share your setup with
        </div>
        <h2 className="font-bold text-[40px]">#FuniroFurniture</h2>
      </div>
      <div className=" flex flex-wrap  justify-center lg:mt-[-20px]  lg:flex gap-[16px]">          
        <div className=" flex  flex-col  gap-[16px]">
          <div className="flex items-end gap-[16px]">  
            <img src={asset.f1} alt="" />
            <img className="aspect-[451/312] w-[451px] h-[312px]" src={asset.f2} alt="" />
          </div>    
          <div className="flex  gap-[16px]">     
            <img src={asset.f3} alt="" />              
            <img className="h-[242px]" src={asset.f4} alt="" />        
          </div>    
        </div>            
        <div className="lg:flex  gap-[16px]">  
            <div className="flex  justify-center items-center"><img src={asset.f5} alt="" /></div>
            <div className="flex flex-col  gap-[16px]">
                <div className="flex items-end  gap-[16px]" >
                    <img className="h-[348px]" src={asset.f6} alt="" />
                    <img src={asset.f7} alt="" />  
                </div>
                <div className="flex  gap-[16px]">  
                    <img src={asset.f8} alt="" />
                    <img className="h-[196px]" src={asset.f9} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Furnitures;
