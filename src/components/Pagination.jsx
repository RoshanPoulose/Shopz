import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage ,currentPage}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  
  return (
    <div className="flex items-center justify-center gap-3 py-70px">
      {pages.map((item, index) => (
        <button
          onClick={() => setCurrentPage(item)}
          className={`rounded-[10px] text-[20px] px-27px py-15px ${item== currentPage ?"bg-[#B88E2F] text-white":"bg-[#F9F1E7] text-black" } `}
          key={index}
        >
          {item}        
        </button>    
      ))}      
      <div onClick={()=>setCurrentPage(currentPage+1)} className="text-[20px] bg-[#F9F1E7] rounded-[10px]  px-28px py-15px">Next</div>
    </div>
  );
};
       
export default Pagination;
  