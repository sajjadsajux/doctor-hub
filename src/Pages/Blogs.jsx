import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../Components/Blog";

const Blogs = () => {
  const blogdata = useLoaderData();
  console.log(blogdata);
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-xl md:text-4xl my-10">Blogs </h1>
      <p className="text-xl text-gray-600 my-10">Let's Explore Some Basics Concepts That Will Make You a Good Developer</p>

      <div className="px-2">
        {blogdata.map((blog, index) => (
          <Blog key={index} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
