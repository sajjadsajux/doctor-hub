import React from "react";
import successdoctor from "../assets/success-doctor.png";
import successpatienst from "../assets/success-patients.png";
import successreview from "../assets/success-review.png";
import successstaffs from "../assets/success-staffs.png";
import CountUp from "react-countup";

const Success = () => {
  return (
    <div className="text-center my-20">
      <h1 className="font-extrabold text-xl md:text-3xl mb-5">We Provide Best Medical Services</h1>
      <p>Trusted by thousands — expert doctors, happy patients, and a dedicated team delivering top-quality care.</p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:max-w-3/4 mx-auto gap-20 mt-8">
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl ">
          <figure className="w-2/5 h-16">
            <img src={successdoctor} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">
              <CountUp end={199} suffix="+" duration={10} />
            </h2>
            <p className="text-3xl font-semibold text-gray-500 text-start">Total Doctors</p>
          </div>
        </div>
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl">
          <figure className="w-2/5 h-16">
            <img src={successreview} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">
              <CountUp end={467} suffix="+" duration={10} />
            </h2>
            <p className="text-3xl font-semibold text-gray-500 text-start">Total Reviews</p>
          </div>
        </div>
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl">
          <figure className="w-2/5 h-16">
            <img src={successpatienst} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">
              <CountUp end={1900} suffix="+" duration={10} />
            </h2>
            <p className="text-3xl font-semibold text-gray-500 text-start">Patients</p>
          </div>
        </div>
        <div className="card bg-white m-2 shadow-sm py-8 pl-10 rounded-3xl">
          <figure className="w-2/5 h-16">
            <img src={successstaffs} alt="Shoes" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="card-title font-extrabold text-5xl">
              <CountUp end={300} suffix="+" duration={10} />
            </h2>
            <p className="text-3xl font-semibold text-gray-500 text-start">Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
