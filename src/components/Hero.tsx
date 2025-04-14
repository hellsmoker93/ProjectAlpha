import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')"
      }}>
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Your Journey to Wellness Begins Here
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Experience exceptional healthcare at Enfield Royal Clinics. 
                Our expert team provides personalized care in a modern, 
                comfortable environment.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button className="bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center">
                  <Calendar className="mr-2" size={20} />
                  Book Appointment
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold uppercase text-sm px-6 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center">
                  Learn More
                  <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;