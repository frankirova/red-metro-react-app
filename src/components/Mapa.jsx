import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/Mapa.css";
import React from "react";

export const Mapa = () => {
  return (
    <div>
      <MapContainer
        className="mapa"
        center={[-31.4156669, -64.190012]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-31.4156669, -64.190012]}></Marker>
      </MapContainer>
    </div>
  );
};
