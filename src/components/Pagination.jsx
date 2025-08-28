import React from "react";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const safePost = postsPerPage > 0 ? postsPerPage : 1;
  const totalPages = Math.ceil(totalPosts / safePost);  
  const maxPage = 3;
  let pages = [];
  const startPage = Math.floor((currentPage - 1) / maxPage) * maxPage + 1;
  const endPage = Math.min(startPage + maxPage - 1, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);        
  }

  return (
    <div className="flex items-center justify-center gap-3 py-70px">
      {pages.map((item, index) => (
        <button
          onClick={() => setCurrentPage(item)}
          className={`rounded-[10px] text-[20px] px-27px py-15px ${
            item == currentPage
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-black"
          } `}
          key={index}
        >
          {item}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`text-[20px]  rounded-[10px]  px-28px py-15px ${
          currentPage == totalPages ? "hidden" : "bg-[#F9F1E7]"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
