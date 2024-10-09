'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import './listings-page.css';

// Define the type for a grooming service
// type GroomingServiceProps = {
//   business_id: number;
//   business_name: string;
//   address: string;
//   description: string;
//   languages: [],
//   sizes: ('small' | 'medium' | 'large')[];
//   services: [];
// };

export default function GroomingPage() {
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



// export default function GroomingPage() {
//   const [services, setServices] = useState<GroomingServiceProps[]>([]); 
//   const [selectedSize, setSelectedSize] = useState<'all' | 'small' | 'medium' | 'large'>('all');

//   // Fetch services data from the JSON file
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch('/business-listings.json');
//         const data: GroomingServiceProps[] = await response.json();
//         setServices(data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };
//     fetchServices();
//   }, []);

//   if (!services.length) {
//     return <div>Loading services...</div>;
//   }

//   // CHANGED: Filter services by size within each service object
//   const displayServices = selectedSize === 'all'
//   ? services
//   : services.filter(service => 
//     Array.isArray(service.sizes) && service.sizes.includes(selectedSize));

//   return (
//     <div className="grooming-page">
//       <header className="header">
//         <div className="header-container">
//           <Link href="/" className="logo-container">
//             Logo
//             <h1 className="brand-name">
//               Future Brand name
//             </h1>
//           </Link>
//           <nav className="nav-menu">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="#" className="nav-link">Contact</Link>
//           </nav>
//         </div>
//       </header>

//       <main className="main-content">
//         <div className="container">
//           <section className="page-intro">
//             <h2 className="page-title">Grooming Services</h2>
//             <p className="page-description">
//               Every pup deserves to look and feel their best. Choose the perfect grooming package for your furry friend!
//             </p>
//           </section>

//           <section className="size-filter">
//             Filters TBD
//             <button 
//               className={`filter-button ${selectedSize === 'all' ? 'active' : ''}`}
//               onClick={() => setSelectedSize('all')}
//             >
//               All Sizes
//             </button>
//             <button 
//               className={`filter-button ${selectedSize === 'small' ? 'active' : ''}`}
//               onClick={() => setSelectedSize('small')}
//             >
//               Small Dogs
//             </button>
//             <button 
//               className={`filter-button ${selectedSize === 'medium' ? 'active' : ''}`}
//               onClick={() => setSelectedSize('medium')}
//             >
//               Medium Dogs
//             </button>
//             <button 
//               className={`filter-button ${selectedSize === 'large' ? 'active' : ''}`}
//               onClick={() => setSelectedSize('large')}
//             >
//               Large Dogs
//             </button>
//           </section>

//           <section className="services-grid">
//             {displayServices.map((service, index) => (
//               <div key={index} className="service-card">
//                 <h3 className="business-name">{service.business_name}</h3>
//                 <div className="service-price-duration">
//                   <span className="service-price">{service.address}</span>
//                 </div>
//                 <p className="service-description">{service.description}</p>
//                 <ul className="service-includes">
//                   {service.services.map((item, idx) => (
//                     <li key={idx} className="service-include-item">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <ul className="service-includes">
//                   Languages spoken
//                   {service.languages.map((item, idx) => (
//                     <li key={idx} className="service-include-item">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link href={`/listings/${service.business_id}`}>
//               <button>View & Book</button>
//             </Link>
//               </div>
//             ))}
//           </section>
//         </div>
//       </main>

//       <footer className="footer">
//         <div className="footer-content">
//           <p className="footer-tagline">Every tail we groom has a happy ending! 🐾</p>
//           <p className="footer-subtitle">Make your furry friend the talk of the dog park.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
