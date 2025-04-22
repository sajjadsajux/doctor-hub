import React from "react";
import { Link } from "react-router";

const NoDoctorFound = () => {
  return (
    <div className="md:max-w-3/4 mx-auto py-20 bg-white mt-20 mb-32 text-center rounded-3xl space-y-10">
      <h1 className="font-extrabold text-xl md:text-3xl ">No Doctor Found</h1>
      <p className="text-gray-500">Sorry, the doctor you're looking for is not available. Please check the URL Again</p>
      <Link to="/" className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
        View All Doctors
      </Link>
    </div>
  );
};

export default NoDoctorFound;
