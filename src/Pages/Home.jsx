import React from "react";
import Banner from "../Components/Banner";
import Doctors from "../Components/Doctors";
import { useLoaderData } from "react-router";
import Success from "../Components/Success";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Doctors doctors={data}></Doctors>
      <Success></Success>
    </div>
  );
};

export default Home;
