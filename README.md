# WeatherApp — Modern Weather Forecast & News Dashboard

> A state-of-the-art weather app built with React + TypeScript + Tailwind CSS.  
> Featuring real-time forecasts, interactive weather maps, smart suggestions, climate news, and more!

---


## Features

✅ Auto-location detection
✅ Search any city and save to favorites  
✅ Hourly and 5-day forecast with OpenWeatherMap  
✅ Recharts-powered temperature and humidity graph  
✅ Leaflet-powered interactive weather map  
✅ AI-powered Smart Suggestions (clothing, umbrella, sunscreen)  
✅ Live weather-related news via NewsAPI  
✅ Responsive UI + Dark/Light theme toggle  



---
## Upcoming Updates

Here are the planned enhancements for future versions of the Weather App:

- Multi-language support (English, Albanian, Macedonian)
- PWA installability for mobile access
- Air Quality Index and UV Index integration
- Sunrise & Sunset display with visuals
- Voice assistant for querying weather via speech
- Push notifications for severe weather alerts
- Animated live weather backgrounds
- Extended analytics for past and future weather trends
- Custom location pinning on map for weather insights
- Improved loading states and error handling UX


---
## Tech Stack

| Layer       | Tech                                               |
|-------------|----------------------------------------------------|
| UI          | React 18, TypeScript, Tailwind CSS, Framer Motion |
| Charts      | Recharts                                           |
| Maps        | Leaflet                                            |
| State Mgmt  | React Query, Zustand                               |
| APIs        | OpenWeatherMap API, NewsAPI                        |
| Routing     | React Router DOM                                   |
| Icons       | Lucide React                                       |

---

## Folder Structure

weather-app/
├── public/ # Static assets
├── src/
│ ├── api/ # Custom API hooks (weather, news)
│ ├── components/ # Reusable components (maps, charts, toggles)
│ ├── hooks/ # Favorites, etc.
│ ├── layouts/ # App layout
│ ├── pages/ # Home, Forecast, News pages
│ ├── App.tsx # App routes
│ ├── main.tsx # Entry point
│ └── index.css # Tailwind and custom styles
├── .env # API keys (excluded from git)
├── vite.config.ts
├── package.json
└── README.md

---

## 🧪 Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/ramadanrexhepi/weather-app.git
cd weather-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
env
Copy
Edit
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_NEWS_API_KEY=your_newsapi_key
Don’t have an API key?

Get OpenWeather: https://openweathermap.org/api

Get NewsAPI: https://newsapi.org/

4. Run the App
bash
Copy
Edit
npm run dev
App will be running at: http://localhost:5173

 Future Enhancements
 Multi-language support

 Real-time weather alerts & push notifications

 Weekly email reports

 User accounts to save favorite cities

 Animated weather backgrounds

## License
This project is licensed under the MIT License.


