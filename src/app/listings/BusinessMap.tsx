// BusinessMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Set up the icon for the marker
const pawIcon = new L.Icon({
  iconUrl: 'images/Dog_Paw_Print.png', // Replace with the path to your paw icon
  iconSize: [30, 30], // Adjust the size as needed
  iconAnchor: [15, 30],
});
type Service = {
    title: string;            // Updated key to lowercase
    description: string;     // Updated key to lowercase
    minimum_time: number;    // Updated key to lowercase
    price: number;           // Updated key to lowercase
  };

type Business = {
    business_id: number;
    business_name: string;
    address: string;
    lat:number;
    long:number;
    description: string;
    languages: [],
    sizes: ('small' | 'medium' | 'large')[];
    services: Service[];
    company_logo: string;
};

type BusinessMapProps = {
  businesses: Business[];
};

const BusinessMap: React.FC<BusinessMapProps> = ({ businesses }) => {
  // You may need to calculate the center of the map based on the addresses
  const center: [number, number] = [52.52437 , 13.41053]; // Default center (e.g., London)

  
  return (
    <MapContainer center={center} zoom={12} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {businesses.map((business) => {
        // Here you need to convert addresses to lat/lng
        const lat = business.lat; 
        const lng = business.long;

        return (
          <Marker key={business.business_id} position={[lat, lng]} icon={pawIcon}>
            <Popup>
              <strong>{business.business_name}</strong>
              <br />
              {business.address}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default BusinessMap;
