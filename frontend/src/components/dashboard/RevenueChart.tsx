import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { time: "11AM", revenue: 1000 },
  { time: "1PM", revenue: 1500 },
  { time: "3PM", revenue: 1200 },
  { time: "5PM", revenue: 4500 },
  { time: "7PM", revenue: 8000 },
  { time: "9PM", revenue: 5000 },
  { time: "11PM", revenue: 2500 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-[420px]">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Hourly Revenue
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Restaurant performance overview
          </p>
        </div>

      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>

          <XAxis dataKey="time" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#0f8b5f"
            fill="#67f0b5"
            strokeWidth={4}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;
