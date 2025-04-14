import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PriceTicker from './components/PriceTicker';
import DenseGridBackground from './components/GridBackground';
import { LineChart } from './components/LineChart';
import { DonutChart } from './components/donut-chart';
import Hero from './components/Hero';
import Features from './components/Features';
import { DatabaseVisual } from './components/DatabaseVisual';
import { Button } from './components/Button';
import { ChevronRight } from 'lucide-react'; 
import Testimonials from './components/Testimonials';
import LiveDashboard from './components/LiveDashboard';
import Pricing from './components/Pricing';
import EndHeroSection from './components/EndHeroSection';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import AllCrypto from './components/allcrypto'; // Create this component

function Home() {
  return (
    <DenseGridBackground>
      <Navbar />
      <PriceTicker />
      <Hero />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl opacity-20 rounded-full"></div>
        <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl border border-zinc-700/50 shadow-2xl overflow-hidden">
          <div className="h-7 bg-zinc-800 border-b border-zinc-700 flex items-center px-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            <div className="bg-zinc-800/50 rounded-lg p-4 backdrop-blur-sm border border-zinc-700/50">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Market Cap</h3>
              <DonutChart value={2.8} percentage={12}>
                <span className="text-white text-lg">2.8</span>
              </DonutChart>
            </div>
            <div className="md:col-span-2 bg-zinc-800/50 rounded-lg p-4 backdrop-blur-sm border border-zinc-700/50">
              <h3 className="text-gray-400 text-sm font-medium mb-2">Active Traders</h3>
              <div className="text-2xl font-bold mb-2 text-white">17,050</div>
              <LineChart />
            </div>
          </div>
        </div>
      </div>

      <Features />

      <section id="analytics" className="py-24 relative bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-400 bg-emerald-950/50 rounded-full border border-emerald-800/50">
                Advanced Analytics
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">A Clarity in Every Coin</h2>
              <p className="text-xl text-gray-400 mb-8">
                CryptoVision brings clarity to crypto markets, helping you make informed decisions—fast.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Clean & interactive charts",
                  "Portfolio growth comparisons",
                  "Secure, easy-to-use dashboard",
                  "Weekly insights and newsletters",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                      <ChevronRight className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button>
                Explore Analytics
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                <DatabaseVisual />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-900/80 to-violet-900/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-purple-500/50 w-4/5 text-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <div className="flex items-center justify-center gap-2 text-purple-300">
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-purple-300" />
                      ))}
                    </div>
                    <span>Best performing assets from last quarter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LiveDashboard/>

      <Testimonials />
      <Pricing />
      <LatestNews />
      <EndHeroSection />
      <Footer />
    </DenseGridBackground>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<LiveDashboard />} />
        <Route path="/all-crypto" element={<AllCrypto />} />
      </Routes>
    </Router>
  );
}

export default App;
