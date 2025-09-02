import React from "react";
import { asset } from "../assets/asset";

const BlogContent = () => {
  return (
    <div>
      <div>
        <div>
          <img src={asset.p1} alt="" />
        </div>
        <div>
          <div>
            <div>
              <img src={asset.cart} alt="" />
              Admin
            </div>
            <div>
              <img src={asset.clock} alt="" />
              14-oct 2022
            </div>
            <div>
              <img src={asset.close} alt="" />
              Wood  
            </div> 
          </div>
          <h1>Going all-in with millennial desing</h1>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <div>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
