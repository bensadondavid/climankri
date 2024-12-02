import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ latitude = 48.9785, longitude = 2.3332 }) {
  const width = "33vh"; 
  const height = "25vh";

  return (
    <>
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        style={{ height, width }}
        dragging={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>CLIMANKRI</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
