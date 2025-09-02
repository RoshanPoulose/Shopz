import React, { useContext } from "react";
import { asset } from "../assets/asset";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const CartDetail = () => {
  const { getCartCount, getCartdetails, removeCart } = useContext(ShopContext);
  const { cartDetails, grandTotal } = getCartdetails();

     
  return (   
    <div className="py-73px px-100px flex gap-[30px] i justify-center ">
      <table className="w-4/6 border-collapse">    
        <thead>        
          <tr className="bg-[#F9F1E7] text-left">
            <th className="font-medium text-[16px] px-4 py-4">Product</th>
            <th className="font-medium text-[16px] px-4 py-4">Price</th>
            <th className="font-medium text-[16px] px-4 py-4">Quantity</th>  
            <th className="font-medium text-[16px] px-4 py-4">Subtotal</th>  
          </tr>  
        </thead>     
        <tbody>         
          {cartDetails.map((item, idx) => (
            <tr className="">    
              <td className="flex items-center gap-4 px-4 py-4">
                <img     
                  className="w-[105px] h-[105px]"
                  src={item.image} 
                  alt=""       
                />  
                <span className="text-[#9F9F9F] text-[16px]">Asgaard sofa</span>
              </td>  
              <td className="text-[#9F9F9F] text-[16px] px-4 py-4">
                Rs. {item.price} 
              </td> 
              <td className="px-4 py-4 ">
                <input     
                  type="number" 
                  defaultValue="1"
                  placeholder={getCartCount}  
                  className="border px-2 py-1 w-10 text-center"
                /> 
              </td>  
              <td className="flex items-center gap-4 px-4 py-4">
                <span className="text-[16px]">Rs. {item.price}</span>
                <img 
                onClick={()=>removeCart(item.id,item.size)}
                  src={asset.deletes}
                  alt="Delete"
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>  
      </table>          
      <div className="w-2/6  bg-[#F9F1E7]">
        <h1 className="text-center font-semibold text-[32px] pt-20px">
          Cart Total                   
        </h1>           
        <div className="flex flex-col px-75px gap-8">    
          <div className="flex mt-[41px] justify-between"> 
            <div>SubTotal</div>
            <div className="text-[#9F9F9F]">Rs. {grandTotal}</div>
          </div>    
          <div className="flex  justify-between">  
            <div>Total</div>  
            <div className="text-[20px] text-[#B88E2F]">Rs. {grandTotal}</div>
          </div>    
        </div>                       
      <Link to={"/checkout"}>  
       <div className="flex py-40px items-center justify-center">
          <button className="px-49px  py-14px border-[1px] rounded-[15px]">  
            Check Out     
          </button>                        
        </div>
      </Link>
      </div>    
    </div>    
  );                   
}; 
 
export default CartDetail;
