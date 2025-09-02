import React from 'react'
import ShopHeader from '../components/ShopHeader'
import Featurebanner from '../components/Featurebanner'
import ComparisonMain from '../components/ComparisonMain'

const Comparison = ({datas}) => {
   const newss=datas
   console.log(newss)
  return (
    <div>
     <ShopHeader />  
     <ComparisonMain /> 
     <Featurebanner /> 
    </div>     
  )   
}         

export default Comparison  
 