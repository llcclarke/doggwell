'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './listings-page.css';
import dynamic from 'next/dynamic'

 
const BusinessMap = dynamic(() => import('./BusinessMap'), { ssr: false });



type ServiceTitle = 'Haircut' | 'Nail Clipping' | 'Bathing' | 'Teeth Cleaning' | 'Creative Grooming';

// const SERVICE_OPTIONS: ServiceTitle[] = [
//   'Haircut',
//   'Nail Clipping',
//   'Bathing',
//   'Teeth Cleaning',
//   'Creative Grooming'
// ];


type Service = {
  title: ServiceTitle;            // Updated key to lowercase
  description: string;     // Updated key to lowercase
  minimum_time: number;    // Updated key to lowercase
  price: number;           // Updated key to lowercase
};


// Define the type for a grooming service
type GroomingServiceProps = {
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



export default function GroomingPage() {
  const [services, setServices] = useState<GroomingServiceProps[]>([]); 
  const [selectedSize, setSelectedSize] = useState<'all' | 'small' | 'medium' | 'large'>('all');
  const [selectedService, setSelectedService] = useState<ServiceTitle | null>(null);
  // const [open, setOpen] = useState(false);
  // Fetch services data from the JSON file
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/business-listings.json`);
        const data: GroomingServiceProps[] = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  if (!services.length) {
    return <div>Loading services...</div>;
  }

  // CHANGED: Filter services by size within each service object
  const displayServices = services.filter(service => {
    const sizeMatch = selectedSize === 'all' || service.sizes.includes(selectedSize);
    const serviceMatch = !selectedService || service.services.some(s => s.title === selectedService);
    return sizeMatch && serviceMatch;
  });

  return (
    <div className="grooming-page">
      <header className="header">
        <div className="header-container">
          <Link href="/" className="logo-container">
            Logo
            <h1 className="brand-name">
              Future Brand name
            </h1>
          </Link>
          <nav className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="#" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="page-intro">
            <h2 className="page-title">Grooming Services</h2>
            <p className="page-description">
              Every pup deserves to look and feel their best. Choose the perfect grooming package for your furry friend!
            </p>
          </section>


          <section className="filters">
            <div className="filter-group">
              <h3>Filter by Size:</h3>
              <div className="filter-buttons">
                <button 
                  className={`filter-button ${selectedSize === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSize('all')}
                >
                  All Sizes
                </button>
                <button 
                  className={`filter-button ${selectedSize === 'small' ? 'active' : ''}`}
                  onClick={() => setSelectedSize('small')}
                >
                  Small Dogs
                </button>
                <button 
                  className={`filter-button ${selectedSize === 'medium' ? 'active' : ''}`}
                  onClick={() => setSelectedSize('medium')}
                >
                  Medium Dogs
                </button>
                <button 
                  className={`filter-button ${selectedSize === 'large' ? 'active' : ''}`}
                  onClick={() => setSelectedSize('large')}
                >
                  Large Dogs
                </button>
              </div>
            </div>

            <div className="filter-group">
              <h3>Filter by Service:</h3>
              <div className="filter-buttons">
                {/* <button 
                  className={`filter-button ${selectedService === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedService('all')}
                >
                  All Services
                </button> */}
                <button 
                  className={`filter-button ${selectedService === 'Haircut' ? 'active' : ''}`}
                  onClick={() => setSelectedService('Haircut')}
                >
                  Haircut
                </button>
                <button 
                  className={`filter-button ${selectedService === 'Nail Clipping' ? 'active' : ''}`}
                  onClick={() => setSelectedService('Nail Clipping')}
                >
                  Nail Clipping
                </button>
                <button 
                  className={`filter-button ${selectedService === 'Bathing' ? 'active' : ''}`}
                  onClick={() => setSelectedService('Bathing')}
                >
                  Bathing
                </button>
                <button 
                  className={`filter-button ${selectedService === 'Teeth Cleaning' ? 'active' : ''}`}
                  onClick={() => setSelectedService('Teeth Cleaning')}
                >
                  Teeth Cleaning
                </button>
                <button 
                  className={`filter-button ${selectedService === 'Creative Grooming' ? 'active' : ''}`}
                  onClick={() => setSelectedService('Creative Grooming')}
                >
                  Creative Grooming
                </button>
              </div>
            </div>
          </section>

<div className='double-page-split'>
          <section className="services-grid">
            {displayServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="logo-and-name">
                <img className="business-logo" src={service.company_logo} alt={service.business_name} />
                <h3 className="business-name">{service.business_name}</h3>
                </div>
                <div className="service-price-duration">
                  <span className="service-price">{service.address}</span>
                </div>
                <p className="service-description">{service.description}</p>


                <h2>Services Offered:</h2>
      <ul className="service-includes">
        {service.services.map((service, index) => (
          <li key={index}>
            <h3>{service.title}</h3> {/* Use lowercase title */}
            <p>{service.description}</p> {/* Use lowercase description */}
            <p>Minimum Time: {service.minimum_time} minutes</p> {/* Use lowercase minimum_time */}
            <p>Price: ${service.price}</p> {/* Use lowercase price */}
          </li>
        ))}
      </ul>
                <ul className="service-includes">
                  Languages spoken
                  {service.languages.map((item, idx) => (
                    <li key={idx} className="service-include-item">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/listings/${service.business_id}`}>
              <button>View & Book</button>
            </Link>
              </div>
            ))}
          </section>

          <BusinessMap businesses={displayServices} /> {/* Pass the listing as an array */}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-tagline">Every tail we groom has a happy ending! 🐾</p>
          <p className="footer-subtitle">Make your furry friend the talk of the dog park.</p>
        </div>
      </footer>
    </div>
  );
}
