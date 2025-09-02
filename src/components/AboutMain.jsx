import React from "react";
import { asset } from "../assets/asset";

export default function FiunitetueAbout({
   
}) {
  return (     
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">   
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-yellow-600">Fiunitetue</span>   
          </h1>                   
          <p className="text-lg text-gray-600 leading-relaxed">    
            Fiunitetue designs pieces that feel at home from day one—timeless
            forms, durable materials, and details that make everyday life    
            easier. We work with skilled makers, responsibly source wood and   
            fabrics, and test every product for long-lasting comfort.    
          </p> 
          <p className="text-lg text-gray-600 leading-relaxed">     
            From compact apartments to spacious family rooms, our collections
            are built to mix, match, and move with you. No gimmicks—just honest
            design, fair pricing, and support that stays with you after   
            delivery.   
          </p>
          <div>    
            <a   
              href="/shop"
              className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-xl shadow hover:bg-yellow-700 transition"
            > 
              Explore Our Collection 
            </a>
          </div>    
        </div>     
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-xl">  
            <img 
              src={asset.p1} 
              alt="Furniture showcase" 
              className="w-full h-full object-cover"
            />             
          </div>       
        </div>               
      </div>       
    </section>                
  );                                                                                  
}                               
                        