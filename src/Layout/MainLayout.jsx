import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import LoaderContent from "../Pages/LoaderContent";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      {navigation.state === "loading" && <LoaderContent></LoaderContent>}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
