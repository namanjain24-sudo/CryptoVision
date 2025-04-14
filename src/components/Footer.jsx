import React from 'react';
import { BarChart3, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#202120' }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-xl font-bold tracking-tight group-hover:text-green-500 transition-colors">
                CryptoVision
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Track, analyze, and optimize your portfolio like a pro. Real-time data and smart tools
              give you control over every move. Experience the next generation of crypto analytics.
            </p>
            <div className="inline-flex items-center space-x-2 text-sm lg:text-lg text-gray-400 hover:text-green-500 transition-colors">

            <span>Made with ❤️ by</span>
              <a 
                href="https://github.com/namanjain24-sudo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold hover:text-green-500 transition-colors flex items-center"
              >
                Naman Jain
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="hover:text-green-500 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-green-500 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Analytics
                </a>
              </li>
              <li>
                <a href="#live-dashboard" className="hover:text-green-500 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-green-500 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-500 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#LatestNews" className="hover:text-green-500 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-green-500/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-green-500/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-green-500/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-green-500/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm text-gray-400">
                Stay updated with our newsletter for the latest crypto insights and features.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 CryptoVision. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
