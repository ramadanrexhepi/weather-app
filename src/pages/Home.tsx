import { useEffect, useState } from "react";
import { useWeather } from "../api/useWeather";
import CitySearch from "../components/CitySearch";
import FavoriteCities from "../components/FavoriteCities";
import type { City } from "../hooks/useFavorites";
import { useFavorites } from "../hooks/useFavorites";
// import CurrentWeather from "../components/CurrentWeather";
import WeatherMap from "../components/WeatherMap";
import ForecastChart from "../components/ForecastChart";
import SmartSuggestions from "../components/SmartSuggestions";

function Home() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [geoDenied, setGeoDenied] = useState(false);

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { data, isLoading, error } = useWeather(location?.lat ?? 0, location?.lon ?? 0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      () => {
        setGeoDenied(true);
        setLocation({ lat: 40.7128, lon: -74.006 }); // NYC fallback
      }
    );
  }, []);

  const handleCitySelect = (city: City) => {
    setLocation({ lat: city.lat, lon: city.lon });
    addFavorite(city);
  };

  const isDataReady = data && Array.isArray(data.list) && data.list.length > 0;

  return (
    <div className="p-4">
      <CitySearch onCitySelect={handleCitySelect} />
      <FavoriteCities
        favorites={favorites}
        onSelect={(city) => setLocation({ lat: city.lat, lon: city.lon })}
        onRemove={removeFavorite}
      />

      {geoDenied && (
        <div className="text-center text-sm text-yellow-600 mb-2">
          📍 Location access denied. Showing New York City by default.
        </div>
      )}

      {isLoading && <div className="text-center">Loading forecast...</div>}

      {error && <div className="text-center text-red-500">Error loading forecast data</div>}

      {isDataReady ? (
        <>
          {/* Hourly Forecast */}
          <div className="max-w-2xl mx-auto mt-4">
            <h3 className="text-xl font-semibold mb-2">🕓 Hourly Preview (Next 24h)</h3>
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
              {data.list.slice(0, 8).map((item: any, idx: number) => (
                <div
                  key={`hour-${idx}`}
                  className="min-w-[120px] bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 text-center"
                >
                  <p className="text-sm font-medium">
                    {new Date(item.dt * 1000).getHours()}:00
                  </p>
                  <img
                    className="mx-auto"
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="icon"
                    width={50}
                  />
                  <p className="text-sm">{item.weather[0].main}</p>
                  <p className="text-lg font-bold">{Math.round(item.main.temp)}°C</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Map */}
          {location && (
            <WeatherMap
              lat={location.lat}
              lon={location.lon}
              onMove={(lat, lon) => setLocation({ lat, lon })}
            />
          )}

          {/* Daily Forecast */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">📍 {data.city.name} - 5 Day Forecast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.list.slice(0, 8).map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-blue-100 dark:bg-gray-700 rounded-lg p-4 text-sm"
                >
                  <p className="font-semibold">
                    {new Date(item.dt * 1000).toLocaleString()}
                  </p>
                  <p>{item.weather[0].description}</p>
                  <p>🌡️ Temp: {item.main.temp}°C</p>
                  <p>💧 Humidity: {item.main.humidity}%</p>
                  <p>🌬️ Wind: {item.wind.speed} m/s</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recharts + Smart AI Suggestions */}
          <ForecastChart data={data.list} />
          <SmartSuggestions weather={data.list[0]} />
        </>
      ) : (
        !isLoading && (
          <div className="text-center text-gray-500 mt-4">No weather data available.</div>
        )
      )}
    </div>
  );
}

export default Home;
