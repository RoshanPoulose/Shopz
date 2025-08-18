import React from "react";
import { asset } from "../assets/asset";

const Desciption = () => {
  return (
    <div  className="border-t-2 border-[#D9D9D9] py-12 "> 
      <div className="flex flex-col gap-10">
        <div className="flex  justify-center items-center gap-13 ">
          <h1 className="font-medium text-[24px]">Description</h1>
          <h2 className="font-medium text-[24px] text-[#9f9f9f]">Additional Information</h2>
          <h2 className="font-medium text-[24px] text-[#9f9f9f]">Reviews</h2>
        </div>
        <div className="flex text-[16px] gap-8 flex-col items-center justify-center px-70 text-[#9f9f9f]">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p> 
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img  src={asset.sofa} alt="sofa" />
        <img src={asset.sofa2} alt="sofa2" /> 
      </div>
    </div>
  );
};

export default Desciption;
