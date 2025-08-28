import React, { useContext, useState } from "react";
import { asset, sorts } from "../assets/asset";
import ProductsItem from "./ProductsItem";
import { ShopContext } from "../context/ShopContext";
import Pagination from "./Pagination";
import { cat } from "../assets/asset";
import Listitems from "./Listitems";
const Filters = () => {
  const { products } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [filterProduct, setFilterProduct] = useState(products);
  const [sortType, setSortType] = useState("Default");
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const [viewMode, setViewMode] = useState("grid");
  const handleFilterClicked = (filterType, values) => {
    let product = products;
    if (filterType === "Categoires") {
      product = products.filter((item) => item.category === values);
    } else if (filterType === "Price") {
      product = products.filter(
        (p) => p.price >= values.min && p.price <= values.max
      );
    }
    if (filterType === "size") {
      product = products.filter((item) => (item.size = values));
    }
    setFilterProduct(product);
    setCurrentPage(1);    
  };    
 const handleSortClicked=(value)=>{
  let product=[...filterProduct ]
  if(value === "priceLowHigh"){  
    product.sort((a,b)=> a.price - b.price ) 
  }
  else if(value =="priceHighLow"){
    product.sort((a,b)=>b.price =a.price)        
  }
  else if(value =="nameAZ"){
   product.sort((a, b) => a.title.localeCompare(b.title)); 
  }
   else if(value =="nameZA"){ 
   product.sort((a, b) => b.title.localeCompare(a.title));  
  } 
    const selected =sorts.find((s)=>s.value ==value)          
    setFilterProduct(product);    
    setSortType(selected?.label || "Default")       
    setCurrentPage(1);           
 }              
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
              <img
                onClick={() => setViewMode("grid")}
                src={asset.grid}
                alt="grid"
                className={`cursor-pointer ${
                  viewMode === "grid" ? "opacity-100" : "opacity-50"
                }`}
              />  
              <img
                onClick={() => setViewMode("list")}
                className={`cursor-pointer ${
                  viewMode === "list" ? "opacity-100" : "opacity-50"
                }`} 
                src={asset.viewlist}
                alt="list" 
              />
            </div> 
          </div>
          <div className="flex gap-[34px] items-center ">
            <div className="w-[1px] h-[37px] bg-[#9F9F9F]"></div>
            <div className="text-[16px]">
              Showing 1–{postsPerPage} of {products.length} results
            </div>
          </div> 
        </div>
        <div className="flex gap-[26px]">
          <div className="flex items-center gap-[17px]">
            <div className="text-[20px]">Show</div>
            <input
              onChange={(e) => {
                let num = Number(e.target.value);
                if (num > 0) {
                  setPostsPerPage(num);
                } else {
                  setPostsPerPage(0);
                }
              }}
              min="1"
              type="number"
              placeholder="16"
              className="p-[15px] bg-white text-[#9F9F9F] outline-none rounded text-center
             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="flex items-center gap-[17px]">
            <div className="text-[20px]">Short by</div>
            <div className=" relative group py-15px flex items-center justify-center  pl-30px pr-86px bg-white text-[#9F9F9F]">
              <h1 className=" bg-white whitespace-nowrap text-[#9F9F9F]">{sortType}</h1>
              <div className="absolute hidden group-hover:flex top-14 z-10 left-0  bg-gray-50 ">
                <ul className="flex flex-col justify-center px-10 py-5 gap-8 bg-white ">
                  {sorts.map((item) => (
                    <li
                      onClick={()=>handleSortClicked(item.value)}
                      className=" whitespace-nowrap text-[#C69C6D] cursor-pointer hover:underline"
                    >
                      {item.label}
                    </li>  
                  ))}  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-102px py-63px">
        <div
          className={`px-[7.08%] gap-[32px] grid sm:grid-cols-1   justify-center items-center ${
            viewMode === "grid"
              ? "md:grid-cols-3 lg:grid-cols-4 "
              : "grid-cols-1"
          } `}
        >
          {currentPosts.map((item, index) =>
            viewMode === "grid" ? (
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
            ) : (
              <Listitems
                key={index}
                id={item.id}
                imagess={item.imagess}
                name={item.title}
                price={item.price}
                ogprice={item.originalPrice}
                discountprice={item.discountPercent}
                description={item.shortDescription}
                rating={item.rating}
                reviews={item.reviews}
                sizes={item.sizes}
                colors={item.colors}
              />
            )
          )}
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
