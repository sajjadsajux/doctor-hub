import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import ContactUs from "../Pages/ContactUs";
import ErrorPage from "../Pages/ErrorPage";
import DoctorDetails from "../Pages/DoctorDetails";
import Blogs from "../Pages/Blogs";
import Loader from "../Components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
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
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/doctor-details/:id",
        Component: DoctorDetails,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("/doctor.json"),
      },
    ],
  },
]);
