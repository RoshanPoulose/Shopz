import React, { useContext, useState } from "react";
import { asset, sorts } from "../assets/asset";
import ProductsItem from "./ProductsItem";
import { ShopContext } from "../context/ShopContext";
import Pagination from "./Pagination";
import { cat } from "../assets/asset";
import Listitems from "./Listitems";
import FilterMain from "./FilterMain";

const Filters = () => { 
  const { products } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [filterProduct, setFilterProduct] = useState(products);
  const [viewMode, setViewMode] = useState("grid");
  const [sortType, setSortType] = useState("Default");
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

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

  const handleSortClicked = (value) => {
    let product = [...filterProduct];
    if (value === "priceLowHigh") {
      product.sort((a, b) => a.price - b.price);  
    } else if (value == "priceHighLow") {
      product.sort((a, b) => (b.price = a.price));
    } else if (value == "nameAZ") {
      product.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value == "nameZA") {
      product.sort((a, b) => b.title.localeCompare(a.title));
    }
    const selected = sorts.find((s) => s.value == value);
    setFilterProduct(product);
    setSortType(selected?.label || "Default"); 
    setCurrentPage(1);
  };
  const currentPosts = filterProduct.slice(firstPostIndex, lastPostIndex); 
    
  return (
    <div>   
      <FilterMain
        handleSortClicked={handleSortClicked}
        setPostsPerPage={setPostsPerPage}
        cat={cat}
        handleFilterClicked={handleFilterClicked}
        setViewMode={setViewMode}
        sortType={sortType}
        viewMode={viewMode} 
        postsPerPage={postsPerPage} 
        products={products}
      />
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
