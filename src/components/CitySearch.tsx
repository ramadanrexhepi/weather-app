import { useState } from "react";
import axios from "axios";

const API_KEY = "24793b514b834603d61db442e4392e26"; // or use env

type City = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

interface Props {
  onCitySelect: (city: City) => void;
}

function CitySearch({ onCitySelect }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<City[]>([]);

  const searchCities = async (q: string) => {
    if (!q.trim()) return;
    const res = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${API_KEY}`
    );
    setResults(res.data);
  };

  return (
    <div className="max-w-md mx-auto mb-6">
      <input
        className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchCities(query)}
      />
      {results.length > 0 && (
        <ul className="mt-2 bg-white dark:bg-gray-700 shadow rounded">
          {results.map((city, i) => (
            <li
              key={i}
              className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600"
              onClick={() => {
                onCitySelect(city);
                setQuery("");
                setResults([]);
              }}
            >
              {city.name}, {city.state ? city.state + ", " : ""}
              {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;
