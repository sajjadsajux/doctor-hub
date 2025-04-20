import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import ContactUs from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
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
      },
    ],
  },
]);
