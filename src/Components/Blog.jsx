import React from "react";
import { LuCalendarHeart } from "react-icons/lu";

const Blog = ({ blog }) => {
  console.log(blog);
  const { question, answer, date } = blog;
  return (
    <div>
      <div className="bg-white rounded-3xl py-10 my-5 md:max-w-3/4 w-full mx-auto text-start p-10  ">
        <div className="space-y-5">
          <div>
            <h3 className="font-bold md:text-3xl">{question}</h3>
            <hr className=" border-dashed border-t-2 border-gray-300 w-full mx-auto mt-3" />
          </div>
          <div>
            <h5 className="text-blue-500 font-bold">Answer:</h5>
            <p className="mt-2">{answer}</p>
            <hr className=" border-dashed border-t-2 border-gray-300 w-full mx-auto mt-3" />
          </div>
          <p className="mt-2 text-gray-500 flex items-center gap-3">
            <LuCalendarHeart size={20} />
            Added at {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
