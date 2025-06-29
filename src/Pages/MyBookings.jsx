import React, { useEffect, useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import Appoinment from "../Components/Appoinment";
import { getAppoinment, removeAppoinment } from "../Utils/Storage";
import { Link } from "react-router";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import Charts from "../Components/Charts";
import { BookingTittle } from "../Utils/Titles";
import { Bounce, toast } from "react-toastify";

const MyBookings = () => {
  const [displayDoctor, setDisplayDoctor] = useState([]);
  useEffect(() => {
    const savedDoctor = getAppoinment();
    setDisplayDoctor(savedDoctor);
  }, []);
  const handleDelete = (id) => {
    removeAppoinment(id);
    setDisplayDoctor(getAppoinment());
    toast.error("Your appointment has been cancelled", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  BookingTittle();

  return (
    <div>
      <div className="text-center ]">
        {displayDoctor.length === 0 ? (
          <>
            <div className="h-[60vh]">
              <h1 className="font-extrabold text-xl md:text-3xl mt-10 my-5">You Have Not Booked Any Appointment Yet</h1>
              <p className="my-5">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
              <Link to="/">
                <button className="btn bg-[#176AE5] text-white rounded-xl">Book An Appointment</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="md:max-w-3/4 mx-auto px-2 ">
              <Charts doctors={displayDoctor}></Charts>
            </div>
            <h1 className="font-extrabold text-xl md:text-3xl mt-20 my-5">My Today Appointments</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          </>
        )}

        <div className="flex flex-col">
          {displayDoctor.map((doctor) => (
            <Appoinment doctor={doctor} key={doctor.id} handleDelete={handleDelete}></Appoinment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
