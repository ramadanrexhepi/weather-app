import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "24793b514b834603d61db442e4392e26";


const fetchForecast = async (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  console.log("🌦️ Forecast URL:", url);
  const response = await axios.get(url);
  return response.data;
};

export const useWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["forecast", lat, lon],
    queryFn: () => fetchForecast(lat, lon),
    staleTime: 1000 * 60 * 30, // cache for 30 minutes
  });
};
