import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


function Map({ latitude = 48.9785, longitude = 2.3332 }) {
  const width = "33vh"; 
  const height = "15vh";

  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });


  return (
    <>
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        style={{ height, width }}
        dragging={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>8 Rue René Dubos, Groslay</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
