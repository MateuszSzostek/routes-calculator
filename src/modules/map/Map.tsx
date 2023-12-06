import React from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.styles.css";
import MapView from "./MapView";
import { LatLngExpression } from "leaflet";

export default function Map() {
  const center: LatLngExpression = [53.2463, 19.81885];
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
      <MapView />
    </MapContainer>
  );
}
