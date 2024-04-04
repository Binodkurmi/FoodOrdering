import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Map.css';

const Map = () => {
  const [mapView, setMapView] = useState('street');

  const handleMapViewChange = (view) => {
    setMapView(view);
  };

  const getTileLayerUrl = (view) => {
    switch (view) {
      case 'satellite':
        return 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}';
      case 'terrain':
        return 'https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}';
      default:
        return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }
  };

  return (
    <div className="map-container">
		 <h2 className='map-container1'>Map<span> View</span></h2>
      <div className="map-views">
        <button onClick={() => handleMapViewChange('street')}>Default</button>
        <button onClick={() => handleMapViewChange('satellite')}>Satellite</button>
        <button onClick={() => handleMapViewChange('terrain')}>Terrain</button>
      </div>
      <MapContainer center={[22.2916, 70.7932]} zoom={13} className="MapContainer">
        {mapView === 'street' && (
          <TileLayer
            url={getTileLayerUrl('street')}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            subdomains={['a', 'b', 'c']}
          />
        )}
        {mapView === 'satellite' && (
          <TileLayer
            url={getTileLayerUrl('satellite')}
            attribution='<a href="https://www.google.com/">Google Maps</a>'
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />
        )}
        {mapView === 'terrain' && (
          <TileLayer
            url={getTileLayerUrl('terrain')}
            attribution='<a href="https://www.google.com/">Google Maps</a>'
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />
        )}
        <Marker position={[22.2405659, 70.8982261]}>
          <Popup> 
            Rajkot, Pin Code: 360020, India
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
