import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
              <div className="flex-auto p-5">
                <h2 className="text-4xl font-semibold mb-8">Contact Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-4" size={24} />
                    <div>
                      <h4 className="text-xl font-semibold">Location</h4>
                      <p className="text-gray-600">123 Enfield Road, London, UK</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-4" size={24} />
                    <div>
                      <h4 className="text-xl font-semibold">Phone</h4>
                      <p className="text-gray-600">+44 20 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-4" size={24} />
                    <div>
                      <h4 className="text-xl font-semibold">Email</h4>
                      <p className="text-gray-600">info@enfieldroyal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="text-blue-600 mr-4" size={24} />
                    <div>
                      <h4 className="text-xl font-semibold">Working Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;