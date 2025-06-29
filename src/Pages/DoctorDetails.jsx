import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { PiWarningCircleLight } from "react-icons/pi";
import { addAppoinment } from "../Utils/Storage";
import { Bounce, toast, ToastContainer } from "react-toastify";
import NoDoctorFound from "../Components/NoDoctorFound";
import { DoctorTittle } from "../Utils/Titles";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const uniqueDoctor = data.find((doctor) => doctor.id === parseInt(id));
  if (!uniqueDoctor) {
    return (
      <div className="p-2">
        <NoDoctorFound></NoDoctorFound>
      </div>
    );
  }
  console.log(uniqueDoctor);
  const { name, image, education, speciality, registration_number, availability_dates, working_hospital, consultation_fee } = uniqueDoctor;
  DoctorTittle(name);
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const availableornot = availability_dates?.includes(today);
  const handleAppoinment = () => {
    const isAdded = addAppoinment(uniqueDoctor);
    if (!isAdded) {
      toast.error(`Your appointment with ${name} is Already scheduled for Today`, {
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

      return;
    }
    toast.success(`Thanks! Your appointment with ${name} is scheduled`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigate("/my-bookings");
  };
  return (
    <div className="md:max-w-3/4 mx-auto mt-10">
      <div className="space-y-5 text-center bg-white rounded-3xl py-10">
        <h1 className="font-extrabold text-xl md:text-4xl">Doctor’s Profile Details</h1>
        <p>
          Explore detailed profiles of trusted doctors including their education, specialties, experience, working hospitals, and available days. <br /> Find the right doctor for your needs and book your consultation with ease.
        </p>
      </div>
      <div>
        <div className=" bg-white rounded-3xl py-10 my-10">
          <div className=" bg-white ">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="md:w-1/3 mx-5 md:pl-7">
                <img src={image} className=" rounded-lg  " />
              </div>
              <div className="md:w-2/3 flex flex-col items-center md:items-start md:pr-10">
                <h1 className="text-3xl font-bold mt-2 md:mt-0">{name}</h1>
                <p className="py-1 text-gray-500 font-medium">{education}</p>
                <p className="py-1 text-gray-500 font-medium">{speciality}</p>
                <p className="py-1 text-gray-500 font-medium">Working at:</p>
                <h3 className="py-1 font-bold">{working_hospital}</h3>
                <hr className="my-2 border-dashed border-t-2 border-gray-300 w-full mx-auto" />
                <p className="text-gray-500 font-medium flex flex-row items-center ">
                  <FaRegRegistered size={15} className="mr-2" /> Reg No: {registration_number}
                </p>
                <hr className="my-2 border-dashed border-t-2 border-gray-300 w-full mx-auto" />
                <h3 className="py-1 font-bold text-center md:text-start flex flex-col md:flex-row justify-center items-center justify-items-center md:gap-5">
                  Availability:
                  <div className="flex flex-wrap gap-2  justify-center">
                    {availability_dates.map((date, index) => (
                      <span key={index} className="badge badge-outline bg-orange-100 text-orange-500">
                        {date}
                      </span>
                    ))}
                  </div>
                </h3>
                <h3 className="py-1 font-bold text-center">
                  Consultation Fee: <br className="md:hidden" /> <span className="text-blue-500">Taka : {consultation_fee}</span> <span className="font-normal text-gray-500">(incl. Vat)</span> <span className="font-normal text-blue-500">Per consultation</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* appoinment sections */}
      <div className="bg-white rounded-3xl py-5 my-10 text-center ">
        <div className="md:p-10 space-y-3">
          <h1 className="font-extrabold text-xl md:text-3xl">Book an Appointment</h1>
          <hr className=" border-dashed border-t-1 border-gray-300 w-full mx-auto md:r-10" />
          <div className="flex justify-between ">
            <h3 className=" font-bold">Availability:</h3>
            {availableornot ? <p className="badge badge-outline bg-green-100 text-green-500">Doctor Available today</p> : <p className="badge badge-outline bg-red-100 text-red-500">Doctor is unavailable today</p>}
          </div>
          <hr className=" border border-t-1 border-gray-300 w-full mx-auto" />
          <p className="badge  bg-orange-100 text-orange-500 flex text-center p-4 mt-10 rounded-2xl ">
            <PiWarningCircleLight size={20} />
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </p>
          <Link>
            <button onClick={handleAppoinment} className="btn bg-[#176AE5] text-white rounded-3xl p-5 w-full mt-8 text-xl">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
