import React from 'react';
import { notFound } from 'next/navigation';
import CalendarBooking from './CalendarBooking.tsx';
import '../listings-page.css';

type Listing = {
  business_id: number;
  business_name: string;
  address: string;
  description: string;
  languages: string[];
  sizes: ('small' | 'medium' | 'large')[];
  services: string[];
};

const fetchListings = async (): Promise<Listing[]> => {
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
  const listing = listings.find((listing) => listing.business_id.toString() === params.id);
  if (!listing) {
    return notFound();
  }

  return (
    <div className="container">
      <div className="business-details">
    <h1>{listing.business_name}</h1>
    <p>{listing.address}</p>
    <p>{listing.description}</p>
    <p>Languages: {listing.languages.join(', ')}</p>
    <p>Sizes: {listing.sizes.join(', ')}</p>
    
    <h2>Services Offered:</h2>
    <ul>
      {listing.services.map((service, index) => (
        <li key={index}>{service}</li>
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
