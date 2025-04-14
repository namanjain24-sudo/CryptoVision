import React from 'react';
import { ArrowRight, LineChart, Wallet, Users } from 'lucide-react';

function EndHeroSection() {
  return (
    <div className="relative">
      {/* Green Line */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-100"></div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 blur-sm"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ready to transform your crypto experience?
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join thousands of traders who are already using CryptoVision to gain an edge in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-lg font-semibold">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/10 hover:border-white/20 transition-colors rounded-lg text-lg font-semibold">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-400">Real-time market analysis and predictive insights to help you make informed decisions.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Trading</h3>
            <p className="text-gray-400">Enterprise-grade security protocols to keep your assets safe and transactions protected.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-400">Connect with experienced traders and learn from a growing community of crypto enthusiasts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndHeroSection;