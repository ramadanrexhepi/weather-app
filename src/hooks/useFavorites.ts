import { useEffect, useState } from "react";

export type City = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

const FAVORITES_KEY = "weather-favorite-cities";

export function useFavorites() {
  const [favorites, setFavorites] = useState<City[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city: City) => {
    if (!favorites.find((c) => c.lat === city.lat && c.lon === city.lon)) {
      setFavorites((prev) => [...prev, city]);
    }
  };

  const removeFavorite = (lat: number, lon: number) => {
    setFavorites((prev) =>
      prev.filter((c) => !(c.lat === lat && c.lon === lon))
    );
  };

  return { favorites, addFavorite, removeFavorite };
}
