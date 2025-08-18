import React, { useContext, useState } from "react";
import { asset } from "../assets/asset";
import ProductsItem from "./ProductsItem";
import { ShopContext } from "../context/ShopContext";
import Pagination from "./Pagination";
import { cat } from "../assets/asset";
const Filters = () => {
  const { products } = useContext(ShopContext); 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [filterProduct, setFilterProduct] = useState(products);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const handleFilterClicked = (filterType, values) => {
    let product = products;  
    if (filterType === "Categoires") {
      product = products.filter((item) => item.category === values);
    } else if (filterType === "Price") {
      product = products.filter
        ((p)=>p.price >= values.min && p.price <= values.max)
      ; 
    }   
    if (filterType === "size") {
      product = products.filter((item) => item.size = values);
    }  
    setFilterProduct(product);     
    setCurrentPage(1);      
  };   

  const currentPosts = filterProduct.slice(firstPostIndex, lastPostIndex);
  return (
    <div>    
      <div className="bg-[#F9F1E7] px-100px py-23px flex justify-between">
        <div className="flex gap-[30px] "> 
          <div className="flex gap-[23px] items-center">    
            <div className="flex gap-[12px] items-center relative group">
               <img src={asset.filter} alt="" />      
              <div>Filter</div> 
              <div className="hidden group-hover:flex  absolute dropdown-menu  top-full  z-10 pt-4"> 
                <div className="pt-1">
                  <div className="flex justify-center px-10 py-5 gap-8 bg-gray-50  ">
                    {cat.map((item, idx) => (  
                      <div            
                        key={idx}       
                        className="bg-white shadow-md rounded-lg p-5 w-64 hover:shadow-xl transition-shadow"
                      > 
                        <h1 className="text-xl font-semibold mb-4 border-b pb-2 text-[#C69C6D] ">
                          {item.name}
                        </h1>
                        <div className="flex flex-col gap-3">
                          {item.thing.map((subitem, index) => (
                            <div
                              onClick={() =>
                                handleFilterClicked(
                                  item.name,
                                  typeof subitem === "object"
                                    ? subitem  
                                    : subitem
                                )
                              }
                              key={index} 
                              className="text-gray-400 cursor-pointer hover:underline"
                            >
                              {typeof subitem === "object"
                                ? subitem.label
                                : subitem} 
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <img src={asset.grid} alt="" />
              <img src={asset.viewlist} alt="" />
            </div>
          </div>
          <div className="flex gap-[34px] items-center ">
            <div className="w-[1px] h-[37px] bg-[#9F9F9F]"></div>
            <div className="text-[16px]">Showing 1–16 of 32 results</div>
          </div>
        </div>
        <div className="flex gap-[26px]">
          <div className="flex items-center gap-[17px]">
            <div className="text-[20px]">Show</div>
            <div className="p-15px bg-white text-[#9F9F9F]">16</div>  
          </div>
          <div className="flex items-center gap-[17px]">
            <div className="text-[20px]">Short by</div>
            <div className="py-15px  pl-30px pr-86px bg-white text-[#9F9F9F]"> 
              Default
            </div> 
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-102px py-63px">
        <div className="px-[7.08%] gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  justify-center items-center ">
          {currentPosts.map((item, index) => (
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
      <Pagination 
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Filters;
