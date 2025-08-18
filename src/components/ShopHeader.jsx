import React, { useContext } from 'react'
import { asset } from "../assets/asset";

const ShopHeader = () => {

  return (
    <div className='relative flex items-center justify-center'>
        <img className='w-full' src={asset.shop} alt="" />
        <div className='absolute flex flex-col items-center'>
          <div className='font-medium text-[48px] '>Shop</div>
          <div className='flex'>
            <div className='font-medium text-[16px]'>Home</div>  
            <img src={asset.right} alt="" />
            <div className=' font-light text-[16px]'>Shop</div>   
          </div>         
        </div>
    </div>  
  )   
}

export default ShopHeader
