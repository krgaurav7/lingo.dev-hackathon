import React from "react";
import Navbar from '../components/Navbar/Navbar' 
import Footer from '../components/footer/footer'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-auto bg-gray-50">{children}
          
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
