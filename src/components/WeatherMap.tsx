import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
  lat: number;
  lon: number;
  onMove: (lat: number, lon: number) => void;
};

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapEvents = ({ onMove }: { onMove: (lat: number, lon: number) => void }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onMove(lat, lng);
    },
  });
  return null;
};

const WeatherMap = ({ lat, lon, onMove }: Props) => {
  const position: LatLngExpression = [lat, lon];

  return (
    <div className="my-8 max-w-2xl mx-auto h-[300px]">
      <MapContainer center={position} zoom={8} scrollWheelZoom={true} className="h-full w-full rounded-xl shadow">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon} />
        <MapEvents onMove={onMove} />
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
