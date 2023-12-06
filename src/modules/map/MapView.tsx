import React, { useEffect } from "react";
import L from "leaflet";
import { TileLayer, Popup, Marker, useMap } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

import "leaflet/dist/leaflet.css";
import "./Map.styles.css";

export default function MapView() {
  const map = useMap();

  const waypoints = [
    [51.505, -0.09], // Start coordinates
    [51.51, -0.1], // End coordinates
  ];

  console.log(map);

  useEffect(() => {
    if (waypoints && waypoints.length >= 2) {
      L.Routing.control({
        waypoints: waypoints.map((coord) => L.latLng(coord[0], coord[1])),
      }).addTo(map);
    }
  }, [map, waypoints]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}
