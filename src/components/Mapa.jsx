import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";

import { useState } from "react";

function Mapa() {
  const [localizacion, setlocalizacion] = useState([1.854667, -76.047611]);

  const ubicacionMiCasa = () => {
    setlocalizacion([1.847056, -76.048528]);
  };

  const position = [1.854667, -76.047611];
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={localizacion}>
          <Popup>este es el marcador</Popup>
        </Marker>
      </MapContainer>

      <button onClick={() => ubicacionMiCasa()}>ir a la ubicacion</button>
    </>
  );
}

export default Mapa;
