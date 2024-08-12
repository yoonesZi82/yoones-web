"use client";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

const Map = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map;
  const redIcon = L.icon({
    iconUrl: "images/location-pin.png",
    iconSize: [55, 55],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <MapContainer
      center={posix}
      zoom={13}
      scrollWheelZoom={false}
      className="rounded-xl w-full h-[300px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posix} icon={redIcon}>
        <Popup>
          <h1 className="font-medium text-2xl text-dark-blue-color">
            ما اینجایم 🖐️
          </h1>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
