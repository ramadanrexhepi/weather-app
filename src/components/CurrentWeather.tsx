import React from "react";

type Props = {
  data: any;
};

const CurrentWeather: React.FC<Props> = ({ data }) => {
  const current = data.list[0]; // next 3h forecast (closest to current)
  const { name } = data.city;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-2">
        🌤️ Current Weather - {name}
      </h2>
      <div className="flex items-center space-x-6">
        <img
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
          alt={current.weather[0].description}
          className="w-20 h-20"
        />
        <div>
          <p className="text-3xl font-bold">{Math.round(current.main.temp)}°C</p>
          <p className="capitalize">{current.weather[0].description}</p>
          <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <p>💧 Humidity: {current.main.humidity}%</p>
            <p>🌬️ Wind: {current.wind.speed} m/s</p>
            <p>🧭 Pressure: {current.main.pressure} hPa</p>
            <p>👁️ Visibility: {current.visibility / 1000} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
