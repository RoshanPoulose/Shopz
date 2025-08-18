import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Breadcrumb from '../components/Breadcrumb';
import Productmain from '../components/Productmain';
import Desciption from '../components/Desciption';
import RealatedProduct from '../components/RealatedProduct';
  
const Product = () => {  
  const {id} =useParams();
  const {products} =useContext(ShopContext) 
  const [productData,setProductData] =useState(false)   
  const fetchProductData =async()=>{
     products.map((item)=>{
        if(item.id==id){
          setProductData(item)
          return null 
        }  
     })  
  }
  useEffect(()=>{
    fetchProductData();
  },[id])  
       

  return (  
    <div>      
      <Breadcrumb productData={productData} />
      <Productmain productData={productData} />
      <Desciption productData={productData} />
      <RealatedProduct productData={productData} />


    </div>            
  )                  
}                   
             
export default Product      
                         