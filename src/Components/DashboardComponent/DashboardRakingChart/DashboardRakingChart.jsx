import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Area,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Page A", uv: 300, pv: 200, amt: 2400 },
  { name: "Page A", uv: 100, pv: 400, amt: 400 },
  { name: "Page A", uv: 200, pv: 200, amt: 2400 },
];

const DashboardRakingChart = () => {
  return (
    <div>
      <ResponsiveContainer>
        <BarChart width={1200} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />

          <Legend />

          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardRakingChart;
