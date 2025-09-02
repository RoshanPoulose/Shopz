import React from 'react'
import { asset } from '../assets/asset'

const Browser = () => {
  return (
    <div className='flex flex-col gap-[61px]'>  
      <div className=' mt-[23px] flex  flex-col items-center '>
        <h1 className='font-bold text-[32px] text-center'>Browse The Range</h1>  
        <p className='text-[20px] text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='grid grid-cols-3 px-[9.10%] gap-[20px]'>  
          <div className='flex  flex-col gap-[30px] '>  
            <img src={asset.dinnig} alt="" />  
             <h4 className='font-semibold text-[24px]'>Dining</h4>      
          </div>  
           <div className='flex  flex-col gap-[30px] '>  
            <img  src={asset.living} alt="" />  
             <h4 className='font-semibold text-[24px]'>Living</h4>          
          </div>    
           <div className='flex  flex-col gap-[30px] '>  
            <img src={asset.bedroom} alt="" />  
             <h4 className='font-semibold text-[24px]'>Bedroom</h4>        
          </div>           
      </div>           
    </div>
  )       
}  
                     
export default Browser
    
