import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import './toll.css'; // Import your CSS file

const TollComponent = () => {
  const [start, setStart] = useState('');
  const [dest, setDest] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('2');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Form submitted:', { start, dest, selectedVehicle, selectedCurrency });
  };

  return (
    <div className="toll-components-wrapper">
      <MapContainer
        center={[20.5937, 78.9629]} // Centered on India
        zoom={5} // Adjust the zoom level as needed
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Example OpenStreetMap tile layer
        />
        {/* You can add more layers, markers, or other map components here */}
      </MapContainer>

      <div className="form-horizontal">
        <div className="form-group row">
          <h1>Toll Calculator Application</h1>
          <div className="col-sm-12">
            <input
              required
              type="text"
              id="start"
              className="form-control"
              value={start}
              placeholder="From"
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <input
              type="text"
              id="dest"
              className="form-control"
              size="40"
              value={dest}
              required
              placeholder="To"
              onChange={(e) => setDest(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-horizontal">
        <div className="form-group row">
          <div className="col-sm-12">
            <select
              id="vehicles"
              className="form-control"
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
            >
              <option value="2">Car</option>
              <option value="3">Truck</option>
              <option value="9">Delivery Truck</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-horizontal">
        <div className="form-group row">
          <div className="col-sm-12">
            <select
              id="currency"
              className="form-control"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="CNY">CNY</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-horizontal">
        <div className="form-group" style={{ textAlign: 'center' }}>
          <div className="col-sm-9">
            <input
              type="submit"
              id="routeButton2"
              className="btn btn-primary"
              value="submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TollComponent;
