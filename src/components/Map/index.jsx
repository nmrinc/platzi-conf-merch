import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const containerStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey={process.env.GM_API_KEY}>
      <GoogleMap
        mapContainerStyles={containerStyles}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
