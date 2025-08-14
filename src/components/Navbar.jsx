import React, { useState } from "react";
import { asset } from "../assets/asset";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between pt-29px pr-100px pl-54px pb-30px items-center ">
      <div className="flex items-center  gap-1">
        <img src={asset.logo} alt="" className="w-[50px] h-[32px]" />
        <div className="font-montserrat font-bold text-[34px] "> Furniro</div>
      </div>
      {/* <ul className='hidden sm:fex gap-5 text-sm text-gray-700'></ul> */}
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
          src={asset.search}
          className="h-[28px] w-[28px] cursor-pointer"
          alt=""
        />
        <img
          src={asset.heart}
          className="h-[28px] w-[28px] cursor-pointer"
          alt=""
        />
        <img
          src={asset.cart}
          className="h-[28px] w-[28px] cursor-pointer"
          alt=""
        />
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
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition all ${
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
