// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Layout from "./layouts/Layout";
import News from "./pages/News";
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
