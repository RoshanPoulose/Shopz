import React from 'react'
import { asset } from '../assets/asset'
   
const GetTouch = () => {
  return (
   <div>
     <div className='text-center justify-center py-98px flex flex-col  '>
        <h1 className='text-[36px] font-semibold '>Get Touch With Us</h1>
        <div className='flex justify-center'><p className='text-[#9F9F9F] text-center text-[16px] max-w-[644px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
    </div>  
    <div>
        <div>
          <div>
           <div>{asset.clock}</div>
             <div> 
               <h3>Address</h3>
               <p></p>   
             </div>    
         </div>  
        </div>
    </div>
   </div>
  )
}

export default GetTouch   
