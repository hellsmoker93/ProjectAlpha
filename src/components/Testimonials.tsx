import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "XXX3",
    text: "The care I received at Enfield Royal Clinics was exceptional. The staff was professional and caring throughout my treatment.",
    rating: 5
  },
  {
    name: "XXX2",
    text: "Outstanding medical facility with state-of-the-art equipment. The doctors are highly skilled and take time to explain everything.",
    rating: 5
  },
  {
    name: "XXX",
    text: "I've been a patient for years and consistently received excellent care. The new facility is beautiful and comfortable.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">What Our Patients Say</h2>
          <p className="text-gray-600 mt-4">Real experiences from our valued patients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;