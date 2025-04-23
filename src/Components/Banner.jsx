import React from "react";
import banner from "../assets/banner-img-1.png";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className=" border-3 border-white rounded-3xl text-center max-w-[95%]  mx-auto bg-gradient-to-b from-gray-100 to-white">
      <div className="w-5/6 mx-auto py-20">
        <div className="space-y-5">
          <h1 className="font-extrabold text-2xl md:text-5xl">
            Dependable Care, Backed by Trusted <br className="hidden md:block" /> Professionals.
          </h1>
          <p>
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>
        <div className="md:gap-5 space-y-4 md:space-y-0 md:flex items-center justify-center my-5">
          <input type="text" placeholder="Search any doctor..." className="bg-white rounded-3xl p-2 md:w-2/5" />
          <button className="btn bg-[#176AE5] text-white rounded-3xl font-bold ">Search Now</button>
        </div>
        <div className="md:flex space-y-5 md:space-y-0 items-center justify-center gap-10">
          <img src={banner} alt="" className="" />
          <img src={banner2} alt="" className=" rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
