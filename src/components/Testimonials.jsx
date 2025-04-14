// components/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: "CryptoVision has completely transformed how I analyze crypto markets. The AI insights are incredibly accurate.",
    author: "Alex Thompson",
    role: "Crypto Trader"
  },
  {
    rating: 5,
    quote: "The real-time analytics and custom alerts have helped me catch opportunities I would have otherwise missed.",
    author: "Sarah Johnson",
    role: "Portfolio Manager"
  },
  {
    rating: 4,
    quote: "As someone new to crypto, the intuitive interface and AI-powered suggestions have been invaluable.",
    author: "Michael Chen",
    role: "Retail Investor"
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#1C1C1C] rounded-lg p-6">
      <StarRating rating={testimonial.rating} />
      <p className="text-white/90 italic mb-6 text-[15px] leading-relaxed">
        "{testimonial.quote}"
      </p>
      <div>
        <h3 className="text-white font-medium text-[15px]">{testimonial.author}</h3>
        <p className="text-gray-500 text-sm mt-0.5">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen bg-black pt-40 pb-6 px-7">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#0A2A1B] text-[#22C55E] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Trusted by traders worldwide
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            See what our users are saying about their experience with CryptoVision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
