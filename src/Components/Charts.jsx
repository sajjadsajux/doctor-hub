import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#aa44ff", "#ff5b5b"];

const Charts = ({ doctors }) => {
  // const { consultation_fee, name } = doctors;
  // const chartData = [doctor];
  // console.log(doctor);
  return (
    <div className=" py-5 h-[40vh] overflow-x-auto mt-10 bg-white rounded-3xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={doctors} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="consultation_fee" shape={<TriangleBar />} label={{ position: "top" }}>
            {doctors.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
