import React from 'react';
import { notFound } from 'next/navigation';
import CalendarBooking from './CalendarBooking.tsx';
import '../listings-page.css';

type Service = {
  title: string;            // Updated key to lowercase
  description: string;     // Updated key to lowercase
  minimum_time: number;    // Updated key to lowercase
  price: number;           // Updated key to lowercase
};


type Listing = {
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

const fetchListings = async (): Promise<Listing[]> => {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/business-listings.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch listings');
  }
  
  return response.json();
};

type ListingProps = {
  params: {
    id: string;
  };
};

const ListingPage: React.FC<ListingProps> = async ({ params }) => {
  const listings = await fetchListings();
  console.log(listings)
  const listing = listings.find((listing) => listing.business_id.toString() === params.id);
  if (!listing) {
    return notFound();
  }
console.log(listing); 
 return (
    <div className="container">
      <div className="business-details">
    <h1>{listing.business_name}</h1>
    <p>{listing.address}</p>
    <p>{listing.description}</p>
    <p>Languages: {listing.languages.join(', ')}</p>
    <p>Sizes: {listing.sizes.join(', ')}</p>
    
    <h2>Services Offered:</h2>
      <ul className="service-includes">
        {listing.services.map((service, index) => (
          <li key={index}>
            <h3>{service.title}</h3> {/* Use lowercase title */}
            <p>{service.description}</p> {/* Use lowercase description */}
            <p>Minimum Time: {service.minimum_time} minutes</p> {/* Use lowercase minimum_time */}
            <p>Price: ${service.price}</p> {/* Use lowercase price */}
          </li>
        ))}
      </ul>
    </div>
    
    <CalendarBooking businessId={listing.business_id} />
  </div>
  );
};

export async function generateStaticParams() {
  const listings = await fetchListings();
  return listings.map((listing) => ({
    id: listing.business_id.toString(),
  }));
}

export default ListingPage;
