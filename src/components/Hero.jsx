import React from "react";
import { asset } from "../assets/asset";

const Hero = () => {
  return (  
    <div className="relative flex flex-col lg:items-center lg:flex-row "> 
      <img src={asset.homebg} alt="" className="w-[100%]" />   
      <div className="w-full   lg:w-[44.5%]  lg:absolute right-[20px]   bg-[#FFF3E3] pt-62px pl-39px pr-43px pb-37px">
        <h2 className="font-semibold text-[16px] tracking-[3px] ">  
          New Arrival    
        </h2>                         
        <h1 className="font-bold text-[52px] leading-[62px] text-[#B88E2F]">Dicover Our New Collection</h1>
        <p className="text-[18px] font-medium leading-[24px] pt-17px">     
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit            
          tellus, luctus nec ullamcorper mattis.                            
        </p>                                                                                                        
        <button className="mt-[46px] py-25px px-72px bg-[#B88E2F] text-white">BUY NOW</button>         
      </div>       
    </div>                                                                               
  );                                         
};                                                               
              
export default Hero;                       
    