import React from 'react';
import cushmanLogo from '../../assets/companylogo/Cushman_&_Wakefield-Logo.wine.svg';
import eylogo from '../../assets/companylogo/EYlogo.svg';
const partners = [
  { name: 'Cushman & Wakefield', logo: cushmanLogo },
  { name: 'EY', logo: eylogo },
  // Add more partners as needed
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-4">
            Our Trusted Partners
          </h2>
          <div className="section-line mx-auto"></div>
        </div>

        <div className="flex justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-22 w-100  transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}