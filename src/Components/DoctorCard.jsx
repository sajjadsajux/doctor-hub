import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { Link } from "react-router";

const DoctorCard = ({ doctor }) => {
  const { id, image, name, education, speciality, experience, registration_number, availability_dates } = doctor;
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const availableornot = availability_dates?.includes(today);
  return (
    <div className=" ">
      <div className="card bg-base-100 m-2 shadow-sm">
        <figure className="px-10 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-actions justify-start px-10 pt-5">
          {availableornot ? <p className="badge badge-outline bg-green-100 text-green-500">Available</p> : <p className="badge badge-outline bg-red-100 text-red-500">Unavailable</p>}
          <div className="badge badge-outline bg-blue-100 text-blue-500">{experience}</div>
        </div>

        <div className="card-body  text-start px-10 pt-5">
          <h2 className="card-title text-2xl font-extrabold">{name}</h2>
          <p className="text-gray-500 font-medium">
            {education} - {speciality}
          </p>
          <hr className="my-2 border-dashed border-t-2 border-gray-300 w-full mx-auto" />
          <p className="text-gray-500 font-medium flex flex-row items-center ">
            <FaRegRegistered size={15} className="mr-2" /> Reg No: {registration_number}
          </p>

          <div className=" ">
            <Link to={`doctor-details/${id}`}>
              <button className="btn btn-outline btn-info rounded-3xl w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
