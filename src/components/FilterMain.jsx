import React, { useState } from "react";
import { asset, sorts } from "../assets/asset";
import { cat } from "../assets/asset";
const FilterMain = ({
  handleSortClicked,
  setPostsPerPage,
  cat,
  handleFilterClicked,
  setViewMode,
  viewMode,
  products,
  postsPerPage,
  sortType,
}) => {
  const [sortOpenMobile, setSortMobileOpen] = useState(false);
  const [filterOpenMobile, setFilterOpenMobile] = useState(false);

  return (
    <div>
      <div className="bg-[#F9F1E7] px-[30px] py-[20px] lg:px-100px lg:py-23px flex-col lg:flex-row  flex justify-between">
        <div className="flex flex-col gap-[30px] ">
          <div className="flex gap-[23px] items-center">
            <div className="flex gap-[12px] items-center relative group">
              <div
                onClick={() => setFilterOpenMobile(!filterOpenMobile)}
                className="flex cursor-pointer gap-[12px] "
              > 
                <img src={asset.filter} alt="" />
                <div>Filter</div>
              </div> 
              <div className="hidden lg:group-hover:flex  absolute dropdown-menu  top-full  z-10 pt-4">
                <div className="pt-1">
                  <div className="flex justify-center px-10 py-5 gap-8 bg-gray-50  ">
                    {cat.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white shadow-md rounded-lg p-5 w-64 hover:shadow-xl transition-shadow"
                      >
                        <h1 className="text-xl font-semibold mb-4 border-b- pb-2 text-[#C69C6D] ">
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
              {filterOpenMobile && (
                <div className="absolute top-full w-80 grid grid-cols-2  left-0 z-10 mt-2 bg-gray-50 p-4 rounded-lg shadow-lg lg:hidden">
                  {cat.map((item, idx) => ( 
                    <div key={idx} className="mb-4"> 
                      <h1 className="text-[#C69C6D]">{item.name}</h1>
                      <div className="flex flex-col gap-2">
                        {item.thing.map((subitem, index) => ( 
                          <div    
                            onClick={() =>     
                              handleFilterClicked(item.name, subitem)
                            }    
                            key={index} 
                            className="text-gray-600  cursor-pointer hover:underline"
                          >     
                            {typeof subitem == "object"  
                              ? subitem.label 
                              : subitem}  
                          </div>
                        ))}      
                      </div>             
                    </div>    
                  ))} 
                </div> 
              )}     
            </div>  
            <div className="flex  gap-[12px] items-center">
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
          <div className="flex gap-[34px] mb-5 lg:mb-0  items-center ">
            <div className="hidden lg:flex w-[1px] h-[37px] bg-[#9F9F9F]"></div>
            <div className="text-[16px]">
              Showing 1–{postsPerPage} of {products.length} results
            </div>
          </div>
        </div> 
        <div className="flex flex-col lg:flex-row gap-[26px]">
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
            <div
              onClick={() => setSortMobileOpen(!sortOpenMobile)}
              className=" relative group py-15px flex items-center justify-center  pl-30px pr-86px bg-white text-[#9F9F9F]"
            >
              <h1  className=" cursor-pointer bg-white whitespace-nowrap text-[#9F9F9F]">
                {sortType}
              </h1> 
              <div className="absolute hidden lg:group-hover:flex top-14 z-10 left-0  bg-gray-50 ">
                <ul className="flex flex-col justify-center px-10 py-5 gap-8 bg-white ">
                  {sorts.map((item) => (
                    <li
                      onClick={() => handleSortClicked(item.value)}
                      className=" whitespace-nowrap text-[#C69C6D] cursor-pointer hover:underline"
                    >
                      {item.label}
                    </li> 
                  ))}
                </ul>
              </div>
              {sortOpenMobile && (
                <ul className="absolute top-full left-0 z-10 mt-2 bg-white shadow-lg rounded-lg lg:hidden w-[150px] ">
                  {sorts.map((item) => (
                    <li className="whitespace-nowrap p-2 text-[#C69C6D] cursor-pointer hover:underline"
                      key={item.value}
                      onClick={() => handleSortClicked(item.value)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMain;
