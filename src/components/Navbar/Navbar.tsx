import React from "react";
import { House , Newspaper} from "lucide-react";
import { LocaleSwitcher } from "lingo.dev/react/client";



const Navbar: React.FC = () => {
    
  return (
    <div id="navbar">
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white font-bold">
        <div id="logo">
          <h1 className="text-4xl font-medium">Fast News</h1>
        </div>

        <div className="flex justify-end p-4">
          <LocaleSwitcher
          className="bg-gray-800"
           locales={[
              "en",
              "es",
              "hi",
              "fr",
              "de", 
              "ar", 
              "zh", 
              "ru"
             ]} />
        </div>

        <div id="nav-links" className="flex space-x-6 items-center ">
          <a href="/" className="flex items-center gap-1 hover:bg-white hover:text-gray-800 px-2 py-1 rounded">
            <House size={18} /> HOME
          </a>
          <a href="/news" className=" flex items-center gap-1 hover:bg-white hover:text-gray-800 px-2 py-1 rounded">
            <Newspaper size={18} />NEWS
          </a>
          <a href="/about" className=" hover:bg-white hover:text-gray-800 px-2 py-1 rounded">
            ABOUT
          </a>
          <a href="#" className=" hover:bg-white hover:text-gray-800 px-2 py-1 rounded">
            CONTACT
          </a>
          <a href="#" className=" hover:bg-white hover:text-gray-800 px-2 py-1 rounded">
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
