import React from 'react';
import { LineChart, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Auth form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link to="/" className="block mb-8">
            <div className="flex items-center gap-2 group">
            <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
          </div>
              <span className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                CryptoVision
              </span>
            </div>
          </Link>
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">{title}</h2>
            <p className="mt-3 text-lg text-gray-400">{subtitle}</p>
          </div>
          <div className="backdrop-blur-lg bg-gray-900/50 rounded-2xl p-8 shadow-2xl ring-1 ring-white/10">
            {children}
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 mix-blend-multiply" />
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
            alt="Background pattern"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 px-8 max-w-2xl">
          <div className="space-y-8 text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-green-500/20 blur-lg" />
              <Wallet className="relative h-20 w-20 text-green-400 mx-auto" />
            </div>
            <h3 className="text-4xl font-bold text-white">Secure Trading Platform</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Trade with confidence using our advanced security features and real-time market analytics. Join thousands of traders who trust CryptoVision for their crypto journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}