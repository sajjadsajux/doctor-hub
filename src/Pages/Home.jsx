import React from "react";
import Banner from "../Components/Banner";
import Doctors from "../Components/Doctors";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Doctors doctors={data}></Doctors>
    </div>
  );
};

export default Home;
