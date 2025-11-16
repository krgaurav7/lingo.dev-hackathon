import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 text-white mt-0">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Fast News
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Your trusted source for breaking news, analysis, and insights from
            around the world. Stay informed. Stay ahead.
          </p>
          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="/" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200"></span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200"></span>
                World
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200"></span>
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200"></span>
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200"></span>
                Technology
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Connect */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-blue-500 hover:scale-110 transition-all duration-200 group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-sky-500 hover:scale-110 transition-all duration-200 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-200 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-red-500 hover:scale-110 transition-all duration-200 group"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-purple-500 hover:scale-110 transition-all duration-200 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm font-medium"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Fast News. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;