import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { Link } from "react-router";

const Appoinment = ({ doctor, handleDelete }) => {
  const { id, name, education, speciality, consultation_fee } = doctor;

  return (
    <div className="my-10 px-2">
      <div className="bg-white rounded-3xl py-5 my-5 md:max-w-3/4 w-full mx-auto">
        <div className="md:p-10 space-y-5 p-5 w-full ">
          <div className="flex justify-between items-center  flex-col lg:flex-row">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-xl md:text-3xl lg:text-left">{name}</h1>

              <p className="text-gray-500 text-sm md:text-xl">
                {education}- {speciality}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm md:text-xl">Appointment Fee : {consultation_fee} Taka + Vat</p>
            </div>
          </div>
          <hr className=" border-dashed border-t-2 border-gray-300 w-full mx-auto" />

          <Link to="/my-bookings">
            <button onClick={() => handleDelete(id)} className="btn btn-outline btn-error rounded-3xl p-5 w-full mt-2 text-xl">
              Cancel Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
