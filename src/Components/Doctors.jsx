import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const Doctors = ({ doctors }) => {
  const [displayDoctor, setDisplayDoctor] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayDoctor(doctors);
    } else {
      setDisplayDoctor(doctors.slice(0, 6));
    }
  }, [doctors, showAll]);
  console.log(doctors);
  return (
    <div className="text-center my-15 ">
      <h1 className="font-extrabold text-xl md:text-4xl mb-5">Our Best Doctors</h1>
      <p>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-3/4 mx-auto gap-10 mt-10">
        {displayDoctor.map((doctor) => (
          <DoctorCard doctors={doctors} doctor={doctor} key={doctor.id}></DoctorCard>
        ))}
      </div>
      <button
        onClick={() => {
          setShowAll(!showAll);
          if (showAll) window.scrollTo(0, 900);
        }}
        className="btn bg-[#176AE5] text-white font-bold rounded-3xl mt-10"
      >
        {showAll ? "View Less Doctors" : "View All Doctors"}
      </button>
    </div>
  );
};

export default Doctors;
