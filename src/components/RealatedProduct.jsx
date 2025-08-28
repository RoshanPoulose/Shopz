import React, { useContext, useState } from 'react'
import ProductsItem from './ProductsItem'
import { ShopContext } from '../context/ShopContext'

const RealatedProduct = ({productData}) => {
   const {products} =useContext(ShopContext) 
   const related=products.filter((item)=>item.category ===productData.category && item.title !==productData.title ) 
   const [show,setShowmore] =useState(4)
  return (  
    <div className='border-t-[1px]  border-[#D9D9D9]'>   
      <div className=' flex items-center justify-center text-medium text-[26px]  pt-56px pb-31px'><h1 className=''>Realated Products</h1></div>
      <div className='pb-31px'>
         <div className="px-[7.08%] gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  justify-center items-center ">
          {related.slice(0,show).map((item, index) => (
            <ProductsItem              
              key={index}        
              id={item.id} 
              imagess={item.imagess}      
              name={item.title}
              price={item.price}   
              ogprice={item.originalPrice}
              discountprice={item.discountPercent}
              description={item.shortDescription}
            />    
          ))}    
        </div>         
      </div>       
      <div className="flex pb-92px items-center justify-center"><button onClick={()=>setShowmore(show+4)} className=" mt-[32px] cursor-pointer w-[245px] px-78px border border-[#B88E2F] py-12px font-semibold text-[16px] text-[#B88E2F] text-center">Show more</button></div>
    </div>      
  )    
}   

export default RealatedProduct
      