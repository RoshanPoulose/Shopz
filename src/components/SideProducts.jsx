import React, { useContext, useState } from "react";
import { asset } from "../assets/asset";
import { ShopContext } from "../context/ShopContext";
const SideProducts = () => {
  const { slides } = useContext(ShopContext);
  
  const [currentIndexSlide, setCurrentSlideIndex] = useState(0);
  const [currentImageSlide, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const currentSlide = slides[currentImageSlide];
    if (currentImageSlide < currentSlide.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else {
      setCurrentImageIndex(0);
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }
  };
  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="bg-[#FCF8F3] flex items-center justify-center pt-31px  pb-57px overflow-hidden">
      <div className=" w-[56%] flex items-center justify-center ">
        <div className="flex w-[74%] flex-col gap-[25px] ">
          <div>
            <h2 className="font-bold text-[40px] leading-[48px] ">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="w-[90%] text-[#616161] font-medium text-[16px] leading[150%]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <button className="cursor-pointer bg-[#B88E2F] text-white w-[176px] h-[48px] px-36px py-12px font-medium text-[16px]">
            Exlore More
          </button>
        </div>
      </div>
      <div className="flex gap-[24px]">
        <div className="relative">
          <img
            className="w-[404px] h-[582px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg rounded-lg"
            src={slides[currentIndexSlide].images[currentImageSlide]}
            alt={slides[currentIndexSlide].title}
          />
          <div className="opacity-80 absolute bottom-[24px] left-[24px] flex">
            <div className=" w-[81%] bg-white  flex flex-col gap-[8px] p-32px ">
              <div className="flex items-center font-medium text-[16px] gap-[8px]">
                {String(currentImageSlide + 1).padStart(2, "0")}
                <img src={asset.line} alt="" className="h-[2px]" />
                {slides[currentIndexSlide].title}
              </div>
              <div className="font-semibold text-[28px] whitespace-nowrap">
                {slides[currentIndexSlide].subtitle}
              </div>
            </div>
            <div className="flex items-end">
              <div
                onClick={nextImage}
                className="h-[48px] w-[48px] cursor-pointer bg-[#B88E2F] flex items-center justify-center"
              >
                <img src={asset.leftarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[40px] flex-col w-[50%]">
          <div className="flex overflow-hidden gap-[24px] ">
            <div className="w-[372px] h-[486px] flex-shrink-0 relative items-center justify-center">
              <img
                className=""
                src={slides[(currentIndexSlide + 1) % slides.length].images[0]}
                alt=""            
              />
              <button  onClick={() => goToSlide((currentIndexSlide + 1) % slides.length)} className=" w-[48px] cursor-pointer h-[48px] shadow-lg rounded-full bg-white flex items-center justify-center absolute  right-[-20px] top-1/2 ">
                <img className="w-[24px] h-[24px]" src={asset.right} alt="" />  
              </button>    
            </div>  
       
            <img
              className=" w-[372px] h-[486px]"
              src={slides[(currentIndexSlide + 2) % slides.length].images[0]}
              alt=""
            />
          </div>
          <div className="flex items-center gap-4">
            {slides.map((_, index) => (
              <div  
                key={index}
                onClick={() => goToSlide(index)}
                className={`${
                  index === currentIndexSlide
                    ? "w-[27px] h-[27px] cursor-pointer rounded-full border-[1px] border-yellow-600 flex items-center justify-center"
                    : "w-[11px] h-[11px] rounded-full bg-gray-300 cursor-pointer"
                }`}
              >  
                {index === currentIndexSlide && (
                  <div className="w-[11px] h-[11px] cursor-pointer rounded-full bg-yellow-600"></div>
                )}  
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProducts;
