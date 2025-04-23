import { useEffect } from "react";
import { useLocation } from "react-router";

export const BookingTittle = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/my-bookings") {
      document.title = "Booking";
    }
  }, [location.pathname]);
};

export const DoctorTittle = (doctorName) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes(`/doctor-details/`)) {
      document.title = doctorName || "Doctor Details";
    } else {
      document.title = "Your Default Title";
    }
  }, [location.pathname, doctorName]);
};
