import React, { useEffect, useState } from "react";
import L, { LatLngExpression } from "leaflet";
import { TileLayer, Popup, Marker, useMap } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

import "leaflet/dist/leaflet.css";
import "./Map.styles.css";

export default function MapView() {
  const [waypoints, setWaypoints] = useState<LatLngExpression[]>([
    [51.505, -0.09],
    [51.51, -0.1],
  ]);

  const map = useMap();
  console.log(waypoints);

  console.log(map);

  useEffect(() => {
    if (waypoints && waypoints.length >= 2) {
      L.Routing.control({
        waypoints: waypoints.map((coord: LatLngExpression) =>
          L.latLng(coord[0], coord[1])
        ),
      }).addTo(map);
    }
  }, [map, waypoints]);

  useEffect(() => {
    map.on("click", function (e) {
      const coord = e.latlng;
      const lat = coord.lat;
      const lng = coord.lng;
      console.log(
        "You clicked the map at latitude: " + lat + " and longitude: " + lng
      );

      setWaypoints((waypoints) => [...waypoints, [lat, lng]]);
    });
  }, []);

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
