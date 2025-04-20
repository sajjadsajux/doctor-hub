import React from "react";
import successdoctor from "../assets/success-doctor.png";
import successpatienst from "../assets/success-patients.png";
import successreview from "../assets/success-review.png";
import successstaffs from "../assets/success-staffs.png";

const Success = () => {
  return (
    <div className="text-center my-20">
      <h1 className="font-extrabold text-xl md:text-4xl mb-5">We Provide Best Medical Services</h1>
      <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
      <div className="grid grid-cols-1  md:grid-cols-4 md:max-w-3/4 mx-auto gap-16 mt-8">
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl ">
          <figure className="w-2/5 h-16">
            <img src={successdoctor} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">199+</h2>
            <p className="text-3xl font-semibold text-gray-500">Total Doctors</p>
          </div>
        </div>
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl">
          <figure className="w-2/5 h-16">
            <img src={successreview} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">467+</h2>
            <p className="text-3xl font-semibold text-gray-500">Total Reviews</p>
          </div>
        </div>
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl">
          <figure className="w-2/5 h-16">
            <img src={successpatienst} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">1900+</h2>
            <p className="text-3xl font-semibold text-gray-500">Patients</p>
          </div>
        </div>
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl">
          <figure className="w-2/5 h-16">
            <img src={successstaffs} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">300+</h2>
            <p className="text-3xl font-semibold text-gray-500">Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
