import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import ContactUs from "../Pages/ContactUs";
import ErrorPage from "../Pages/ErrorPage";
import DoctorDetails from "../Pages/DoctorDetails";
import Blogs from "../Pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading.......</p>,
        loader: () => fetch("/doctor.json"),
      },
      {
        path: "/my-bookings",
        Component: MyBookings,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
      {
        path: "/blogs",
        Component: Blogs,
        hydrateFallbackElement: <p>Loading.......</p>,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/doctor-details/:id",
        Component: DoctorDetails,
        hydrateFallbackElement: <p>Loading.......</p>,
        loader: () => fetch("/doctor.json"),
      },
    ],
  },
]);
