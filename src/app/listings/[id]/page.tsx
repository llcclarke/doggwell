import React from 'react';
// import { notFound } from 'next/navigation';


export default function ListingPage() {
    return (
      <div className="landing-page">
        <header className="header">
          <div className="header-container">
            Logo
              <h1 className="brand-name">
                Future Brand name
              </h1>
            <nav className="nav-menu">

            </nav>
          </div>
        </header>
        </div>
)}

// type Listing = {
//   business_id: number;
//   business_name: string;
//   address: string;
//   description: string;
//   languages: string[];
//   sizes: ('small' | 'medium' | 'large')[];
//   services: string[];
// };

// const fetchListings = async (): Promise<Listing[]> => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/business-listings.json`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch listings');
//   }
//   return response.json();
// };

// type ListingProps = {
//   params: {
//     id: string;
//   };
// };

// const ListingPage: React.FC<ListingProps> = async ({ params }) => {
//   const listings = await fetchListings();
//   const listing = listings.find((listing) => listing.business_id.toString() === params.id);
 

//   if (!listing) {
//     return notFound();
//   }

//   return (
//     <div>
//       <h1>{listing.business_name}</h1>
//       <p>{listing.address}</p>
//       <p>{listing.description}</p>
//       <p>Languages: {listing.languages.join(', ')}</p>
//       <h2>Services Offered:</h2>
//       <ul>
//         {listing.services.map((service, index) => (
//           <li key={index}>{service}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
export async function generateStaticParams() {
  const listings = [
    {
      "business_id": 1,
      "business_name": "Dog Business 2",
      "address": "58 Hermannstraße, 12051, Neukölln, Berlin",
      "description": "Basic grooming service for dogs over 35 pounds",
      "languages": ["English", "German", "Woof"],
      "sizes": ["large", "small"],
      "services":["Relaxing Bath", "Blow Dry", "Nail Trim", "Ear Cleaning"]
    }
  
  ]
  return listings.map((listing) => ({
    id: listing.business_id.toString(),
  }));
}

// export default ListingPage;
