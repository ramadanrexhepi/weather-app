import type{ City } from "../hooks/useFavorites"; // ✅ works now



interface Props {
  favorites: City[];
  onSelect: (city: City) => void;
  onRemove: (lat: number, lon: number) => void;
}

function FavoriteCities({ favorites, onSelect, onRemove }: Props) {
  if (favorites.length === 0) return null;

  return (
    <div className="max-w-md mx-auto mb-6">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
        ⭐ Favorite Cities
      </h3>
      <ul className="bg-white dark:bg-gray-800 rounded-lg shadow">
        {favorites.map((city, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700"
          >
            <button
              onClick={() => onSelect(city)}
              className="text-left flex-1 hover:underline text-sm"
            >
              {city.name}, {city.country}
            </button>
            <button
              onClick={() => onRemove(city.lat, city.lon)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCities;
