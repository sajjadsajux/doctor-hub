import React from "react";
import DoctorCard from "./DoctorCard";

const Doctors = ({ doctors }) => {
  console.log(doctors);
  return (
    <div className="text-center my-15 ">
      <h1 className="font-extrabold text-xl md:text-4xl mb-5">Our Best Doctors{doctors.length}</h1>
      <p>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-3/4 mx-auto gap-20">
        {doctors.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.id}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
