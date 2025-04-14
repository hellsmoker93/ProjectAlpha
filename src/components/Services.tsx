import React from 'react';
import { Heart, Users, Stethoscope, Brain } from 'lucide-react';

const services = [
  {
    title: 'General Health',
    description: 'Comprehensive health assessments and preventive care services.',
    icon: Heart
  },
  {
    title: 'Family Medicine',
    description: 'Healthcare services for all family members, from children to elderly.',
    icon: Users
  },
  {
    title: 'Specialist Care',
    description: 'Expert consultation with specialized medical professionals.',
    icon: Stethoscope
  },
  {
    title: 'Mental Health',
    description: 'Professional counseling and mental health support services.',
    icon: Brain
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <p className="text-gray-600 mt-4">Comprehensive healthcare solutions tailored to your needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="text-blue-600 mb-4">
                <service.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;