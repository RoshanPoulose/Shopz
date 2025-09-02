import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Comparison from "./pages/Comparison";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (  
    <>  
      <Navbar /> 
      <SearchBar />
      <Routes>    
        <Route path="/" element={<Home />} />  
        <Route path="/shop" element={<Shop />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/Comparison" element={<Comparison />} />
      </Routes> 
      <Footer />  
    </>                                          
  );          
};                                                 
     
export default App;
