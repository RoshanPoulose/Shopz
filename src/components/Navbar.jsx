import React, { useContext, useState } from "react";
import { asset, cat, compare } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    getCartCount,
    getCartdetails, 
    removeFavourite, 
    removeCart, 
    getFavouriteDetails,
    setShowSearch,
  } = useContext(ShopContext);
  const { cartDetails, grandTotal } = getCartdetails();  
  const favouriteItems = getFavouriteDetails();
  
  return (  
    <div className="flex justify-between px-[30px] pt-[30px] md:pt-[29px] md:pr-[100px] pl-54px pb-30px items-center ">
      <div className="flex items-center  gap-1">
        <img src={asset.logo} alt="" className="w-[50px] h-[32px]" />
        <div className="font-montserrat font-bold text-[34px] "> Furniro</div>
      </div>
      <ul className="hidden lg:flex gap-[75px]">
        <NavLink to="/" className="flex ">
          <p className="font-medium text-[16px]">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/shop"} className="flex gap-2">
          <p>Shop</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex gap-2">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex gap-2">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="hidden lg:flex gap-[45px]">
        <img
          src={asset.account}
          alt=""
          className="h-[28px] w-[28px] cursor-pointer"
        /> 
 
        <img  
          onClick={() => setShowSearch(true)}
          src={asset.search}
          className="h-[28px] w-[28px] cursor-pointer"  
          alt=""      
        />        
                  
        <div className="relative group">
          <img 
            src={asset.heart}   
            className="h-[28px] w-[28px] cursor-pointer"
            alt=""  
          />
          <div className="hidden group-hover:flex flex-col justify-between fixed top-0  p-30px right-0 z-10 w-[417px] bg-white h-[746px]">
            <div className=" ">
              <div className="flex items-center pb-26px justify-between">
                <h1 className="font-semibold text-[24px]"> ADD to Favourite</h1>
                <img src={asset.heart} alt="" />
              </div>
              <div className="w-[287px] h-[1px] bg-[#D9D9D9]  "></div>
              <div className="py-[42px] flex flex-col gap-2 ">
                {favouriteItems.length === 0 ? (
                  <p>No items were Add to Cart</p>
                ) : (
                  favouriteItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center  justify-between "
                    >
                      <img
                        className="w-[105px] object-cover h-[105px]"
                        src={item.image}
                        alt=""
                      />
                      <div className="flex  flex-col ">
                        <h1 className="text-[16px]">{item.title}</h1>
                        <div className="flex items-center text-[16px] gap-4">
                          <div className="font-light text-[16px]">
                            {item.quantity}
                          </div>
                          x
                          <div className="text-[#B88E2F]">Rs. {item.price}</div>
                        </div>
                      </div>
                      <div className="cursor-pointer" onClick={()=>removeFavourite(item.id)}>❤️</div>
                    </div>
                  ))  
                )}  
              </div>
              <div  className="py-[42px] flex flex-col gap-2 "></div>
            </div>
          </div>
        </div> 
        <div className="relative group">  
          <img 
            src={asset.cart}
            className="h-[28px] w-[28px] cursor-pointer"
            alt=""
          /> 
          <div className=" w-[18px] absolute top-3.5 left-4.5 flex items-center justify-center text-[10px] rounded-full bg-black text-white h-[18px]">
            {getCartCount()}
          </div>
          <div className="hidden  group-hover:flex flex-col justify-between fixed top-0  p-30px right-0 z-10 w-[417px] bg-white h-[746px]">
            <div className=" ">
              <div className="flex items-center pb-26px justify-between">
                <h1 className="font-semibold text-[24px]"> Shoping Cart</h1>
                <img src={asset.shopclose} alt="" />
              </div>
              <div className="w-[287px] h-[1px] bg-[#D9D9D9]  "></div>
              <div className="py-[42px] flex flex-col gap-2 ">
                {cartDetails.length === 0 ? (
                  <p>No items were Add to Cart</p>
                ) : (
                  cartDetails.map((item, index) => (
                    <div
                      key={index} 
                      className="flex items-center  justify-between "
                    >
                      <img
                        className="w-[105px] object-cover h-[105px]"
                        src={item.image}
                        alt=""
                      />
                      <div className="flex  flex-col ">
                        <h1 className="text-[16px]">{item.title}</h1>
                        <div className="flex items-center text-[16px] gap-4">
                          <div className="font-light text-[16px]">
                            {item.quantity}
                          </div>
                          x
                          <div className="text-[#B88E2F]">Rs. {item.price}</div>
                        </div>
                      </div>
                      <div>
                        <img
                          className="cursor-pointer "
                          onClick={() => removeCart(item.id, item.size)}
                          src={asset.shopcloseicon}
                          alt=""
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div>
              <div className="flex px-30px pb-30px gap-[100px]">
                <div className="text-[16px] ">SubTotal</div>
                <div className="font-semibold text-[#B88E2F] text-[16px]">
                  Rs{grandTotal}
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#d9d9d9]"></div>
              <div className=" flex px-30px py-28px gap-[14px]">
                <Link to={"cart"}>
                  <button className="py-6px px-20px cursor-pointer rounded-[50px] border-[1px] ">
                    Cart
                  </button>
                </Link>
                <Link to={"checkout"}>
                  <button className="py-6px px-20px cursor-pointer rounded-[50px] border-[1px]">
                    Checkout
                  </button>
                </Link>
                <Link to={"/Comparison"}>
                  <button className="py-6px cursor-pointer px-20px rounded-[50px] border-[1px] ">
                    Comparison
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => {
          setVisible(true);
        }}
        src={asset.menu}
        alt=""
        className="w-[50px] cursor-pointer h-[50px] lg:hidden"
      />
      <div
        className={`absolute z-10 top-0 right-0 bottom-0 overflow-hidden bg-white transition all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-3">
            <img
              onClick={() => setVisible(false)}
              src={asset.close}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
          <nav className="flex-grow overflow-y-auto p-4 space-y-4 text-gray-700">
            <NavLink
              to="/"
              onClick={() => setVisible(false)}
              className="block px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setVisible(false)}
              className="block px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setVisible(false)}
              className="block px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setVisible(false)}
              className="block px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="flex gap-[45px] flex-col pl-20px">
          <div className="flex gap-2 items-center">
            <img
              src={asset.account}
              alt=""
              className="h-[28px] w-[28px] cursor-pointer"
            />
            <h2>Account</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={asset.search}
              alt=""
              className="h-[28px] w-[28px] cursor-pointer"
            />
            <h2>Search </h2>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={asset.heart}
              alt=""
              className="h-[28px] w-[28px] cursor-pointer"
            />
            <h2>Favorites</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={asset.cart}
              alt=""
              className="h-[28px] w-[28px] cursor-pointer"
            />
            <h2>Shop</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
