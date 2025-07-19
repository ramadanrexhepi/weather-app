import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

type Props = {
  data: any[];
};

const ForecastChart = ({ data }: Props) => {
  const chartData = data.slice(0, 8).map((item: any) => ({
    time: new Date(item.dt * 1000).getHours() + ":00",
    temp: item.main.temp,
    humidity: item.main.humidity,
  }));

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4">📊 Temperature & Humidity (Next 24h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" name="Temperature (°C)" />
          <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#82ca9d" name="Humidity (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
