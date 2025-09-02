import React from "react";
import { asset } from "../assets/asset";

const GetTouch = () => {
  return (
    <div>
      <div className="text-center justify-center py-98px flex flex-col  ">
        <h1 className="text-[36px] font-semibold ">Get Touch With Us</h1>
        <div className="flex justify-center"> 
          <p className="text-[#9F9F9F] text-center text-[16px] max-w-[644px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!       
          </p>
        </div>        
      </div>
      <div className="flex px-191px  "> 
        <div className="flex w-[40%] pt-20px h-full gap-4 flex-start">
          <div className="flex pt-40px  gap-4 flex-start px-48px  flex-col">
            <div className="flex  items-start gap-5 justify-center">
              <div className="flex flex-col w-auto h-auto items-center ">
                <img 
                  className="w-[30px] h-[30px]"  
                  src={asset.location}
                  alt=""
                />  
              </div> 
              <div> 
                <h3 className="font-medium text-[25px]">Address</h3>
                <p className="text-[16px]">
                  236 5th SE Avenue, New York NY10000, United States 
                </p>
              </div> 
            </div>
            <div className="flex  items-start gap-5 "> 
              <div className="flex flex-col w-auto h-auto items-center ">
                <img className="w-[30px] h-[30px]" src={asset.phone} alt="" />
              </div>
              <div> 
                <h3 className="font-medium text-[25px]">Phone</h3>
                <div>
                  <p className="text-[16px]">Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div> 
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center ">
                <img className="w-[30px] h-[30px]" src={asset.clock} alt="" />
              </div> 
              <div>   
                <h3 className="font-medium text-[25px]">Phone</h3> 
                <p className="text-[16px]">Monday-Friday: 9:00 - 22:00</p>
                <p> Saturday-Sunday: 9:00 - 21:00</p> 
              </div> 
            </div> 
          </div>  
        </div>
        <div className="flex w-6/10 px-53px py-63px flex-col gap-8">
          <div className="flex flex-1 flex-col gap-5.5 ">
            <label className="font-medium  text-[16px]">Your name</label>
            <input 
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Email Adress</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Subject</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Subject</label>
            <textarea
              required 
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="email"
            />
          </div>
       
          <div>
            <button className="py-14px  text-white rounded-[5px] bg-[#B88E2F] px-89px">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default GetTouch;
