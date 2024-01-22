import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default map center coordinates
    return ( 
        <div className="map-container">
        <MapContainer center={mapCenter} zoom={13} style={{ height: '300px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
     );
}
 
export default Map;