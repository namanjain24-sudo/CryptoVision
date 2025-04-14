import React from 'react';

export default function Navbar() {
    return (
      <nav className="bg-black border-b border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
            </div>
            <span className="text-white text-xl font-bold">CryptoVision</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</a>
            <a href="#live-dashboard" className="text-gray-400 hover:text-white transition-colors">Live Dashboard</a>
            
            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Price</a>
            <a href="#LatestNews" className="text-gray-400 hover:text-white transition-colors">Latest News</a>


          </div>
          
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors">Log in</button>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-colors">
            Sign up
            </button>
          </div>
        </div>
      </nav>
    );
  }