import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-0">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Fast News</h2>
          <p className="text-sm text-gray-200">
            Your trusted source for breaking news, analysis, and insights from
            around the world. Stay informed. Stay ahead.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">World</a></li>
            <li><a href="#" className="hover:underline">Business</a></li>
            <li><a href="#" className="hover:underline">Sports</a></li>
            <li><a href="#" className="hover:underline">Technology</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-300"><Facebook /></a>
            <a href="#" className="hover:text-amber-300"><Twitter /></a>
            <a href="#" className="hover:text-amber-300"><Instagram /></a>
            <a href="#" className="hover:text-amber-300"><Youtube /></a>
            <a href="#" className="hover:text-amber-300"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-600 text-center py-3 text-sm">
        © {new Date().getFullYear()} Fast News. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
