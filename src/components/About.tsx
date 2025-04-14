import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              About Enfield Royal Clinics
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Since our establishment, Enfield Royal Clinics has been at the forefront of providing exceptional healthcare services. Our state-of-the-art facilities and dedicated team of healthcare professionals ensure that every patient receives the highest standard of care.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              We believe in a holistic approach to healthcare, combining modern medical practices with personalized attention to meet each patient's unique needs.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
              <img
                alt="Medical Team"
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                className="w-full align-middle rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;