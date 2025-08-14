import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="border px-[7%]  border-t-gray-200 pt-40px">
      <div className="  grid grid-cols-1 md:flex pb-48px border-b border-b-gray-400 ">
        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="font-bold text-[24px] ">Funiro.</div>
          <div className="sm:w-[50%] md:w-[100%] text-[16px]  text-gray-400">400 University Drive Suite 200 Coral Gables, FL 33134 USA</div>
        </div>  
        <div className="flex  flex-1 mt-7 md:mt-0 ">                                            
          <div className="flex flex-col gap-[55px] w-[50%]">  
            <div className="text-[16px] text-gray-400">Link</div>          
            <div className="flex flex-col gap-[45px]">    
              <NavLink to="/" className=" ">               
                <p className="font-medium text-[16px]">Home</p>  
              </NavLink>      
              <NavLink to={"/shop"} className="flex gap-2">
                <p>Shop</p>          
              </NavLink>    
              <NavLink to={"/about"} className="flex gap-2">      
                <p>About</p>      
              </NavLink>              
              <NavLink to={"/contact"} className="flex gap-2">  
                <p>Contact</p>        
              </NavLink>                                      
            </div>            
          </div>           
          <div className="flex flex-col gap-[55px] w-[50%]">  
            <div className="text-[16px] text-gray-400">Help</div>      
            <div className="flex flex-col gap-[45px]">    
              <NavLink to="/" className=" ">    
                <p className="font-medium text-[16px]">Payment Options</p>  
              </NavLink>      
              <NavLink to={"/shop"} className="flex gap-2">
                <p>Returns</p>          
              </NavLink>    
              <NavLink to={"/about"} className="flex gap-2">      
                <p>Privacy Policies</p>               
              </NavLink>                           
            </div>                                 
          </div>                                  
        </div>
        <div className="flex flex-col flex-1  gap-[55px]">  
            <div className="text-[16px] text-gray-400">NewsLetter</div>
            <div className="flex gap-[11px]">
                <div className="w-[60%] border-b border-b-black"><input type="email" placeholder="Enter Your Email Address" /></div>
                <div className=" font-bold text-[16px] border-b border-b-black">SUBSCRIBE</div>
            </div>
        </div>          
      </div>         
      <div className="pt-35px pb-38px">                                                
        <div className="text-[16px] ">2025 https://roshanpoulose.netlify.app/. All rights reverved</div>
      </div>          
    </div>    
  );    
};  
      
export default Footer;  
      