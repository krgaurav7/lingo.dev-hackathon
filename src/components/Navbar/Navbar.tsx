import React, { useState } from "react";
import { House, Newspaper, Menu, X } from "lucide-react";
import { LocaleSwitcher } from "lingo.dev/react/client";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-10 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div id="logo" className="shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fast News
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="flex items-center gap-1 text-gray-800 hover:text-blue-500 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <House size={18} /> HOME
            </a>
            <a 
              href="/news" 
              className="flex items-center gap-1 text-gray-800 hover:text-blue-500 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <Newspaper size={18} /> NEWS
            </a>
            <a 
              href="/about" 
              className="text-gray-800 hover:text-blue-500 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              ABOUT
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-blue-500 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              CONTACT
            </a>
            <a 
              href="#" 
              className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
            >
              LOGIN
            </a>
            <LocaleSwitcher
              className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-gray-800 hover:bg-white/30 transition-all duration-200"
              locales={[
                "en",
                "es",
                "hi",
                "fr",
                "de", 
                "ar", 
                "zh", 
                "ru"
              ]} 
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LocaleSwitcher
              className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 text-gray-800 text-sm"
              locales={[
                "en",
                "es",
                "hi",
                "fr",
                "de", 
                "ar", 
                "zh", 
                "ru"
              ]} 
            />
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500 transition-colors duration-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/10 backdrop-blur-md border-t border-white/20">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
          >
            <House size={18} /> HOME
          </a>
          <a
            href="/news"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
          >
            <Newspaper size={18} /> NEWS
          </a>
          <a
            href="/about"
            className="block text-gray-800 hover:text-blue-500 hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:text-blue-500 hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
          >
            CONTACT
          </a>
          <a
            href="#"
            className="block w-full text-center bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg font-medium"
          >
            LOGIN
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;