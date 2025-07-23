type Props = {
  weather: any;
};

const SmartSuggestions = ({ weather }: Props) => {
  if (!weather) return null;

  const main = weather.weather[0].main.toLowerCase();
  const temp = weather.main.temp;
  const wind = weather.wind.speed;
  const humidity = weather.main.humidity;

  let suggestions: string[] = [];

  // Temperature-based advice
  if (temp > 30) suggestions.push("🥵 It's hot — stay hydrated and wear light clothing.");
  else if (temp > 20) suggestions.push("😊 Nice weather! Light clothes should be fine.");
  else if (temp > 10) suggestions.push("🧥 It might get chilly — bring a jacket.");
  else suggestions.push("❄️ It's cold — dress warmly and layer up.");

  // Weather condition advice
  if (main.includes("rain")) suggestions.push("☔ It's rainy — carry an umbrella.");
  if (main.includes("snow")) suggestions.push("🧤 Snowfall expected — wear boots and gloves.");
  if (wind > 10) suggestions.push("🌬️ It's windy — secure loose items and wear a windbreaker.");
  if (humidity > 80) suggestions.push("💦 Humidity is high — you might feel sticky.");

  return (
    <div className="max-w-2xl mx-auto bg-yellow-100 dark:bg-yellow-200 text-black rounded-xl shadow-md p-4 mt-6">
      <h3 className="text-lg font-bold mb-2"> Suggestions</h3>
      <ul className="list-disc ml-5 space-y-1 text-sm">
        {suggestions.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartSuggestions;
