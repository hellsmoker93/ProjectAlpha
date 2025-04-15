import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <span className="ml-3 text-gray-800 hover:text-white transition-colors font-bold text-lg">
    Enfield Royal Clinics
  </span>
            <p className="text-gray-400 mb-4">
              Providing exceptional healthcare services with a commitment to excellence and patient care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mb-8">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div className="w-full md:w-4/12 ml-auto mb-8">
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">General Health</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family Medicine</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Specialist Care</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mental Health</a></li>
                </ul>
              </div>
              
              <div className="w-full md:w-4/12 ml-auto mb-8">
                <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-800" />
        
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Enfield Royal Clinics. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;