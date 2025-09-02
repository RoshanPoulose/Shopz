import React, { useContext } from 'react'
import { asset } from "../assets/asset";
import { useLocation, useParams } from 'react-router-dom';

const ShopHeader = () => {
 const namepath = useLocation()
  const loc =namepath.pathname.replace("/",'')
 
  return (
    <div className='relative flex items-center justify-center'>
        <img className='w-full' src={asset.shop} alt="" />
        <div className='absolute flex flex-col items-center'>
          <div className='font-medium text-3xl lg:text-[48px] '>{loc}</div>
          <div className='flex'>
            <div className='font-medium text-[16px]'>Home</div>  
            <img src={asset.right} alt="" />
            <div className=' font-light text-[16px]'>{loc}</div>   
          </div>         
        </div>
    </div>  
  )   
}

export default ShopHeader
