import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '/Images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/dashboard');
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="SEO.ai Logo" className="h-16 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-4">
              <Link to="/" className="text-[#EFE3C2] hover:text-white px-3 py-2">Home</Link>
              <Link to="/#about" className="text-[#EFE3C2] hover:text-white px-3 py-2">About</Link>
              <Link to="/#features" className="text-[#EFE3C2] hover:text-white px-3 py-2">Features</Link>
              <Link to="/#pricing" className="text-[#EFE3C2] hover:text-white px-3 py-2">Pricing</Link>
              <Link to="/#testimonials" className="text-[#EFE3C2] hover:text-white px-3 py-2">Testimonials</Link>
              <Link to="/#contact" className="text-[#EFE3C2] hover:text-white px-3 py-2">Contact</Link>
            </div>
          </div>

          {/* Dashboard Button */}
          <div className="hidden md:block flex-shrink-0">
            <button 
              onClick={handleDashboardClick}
              className="running-border-button px-6 py-2 rounded-full bg-[#3E7B27] text-[#EFE3C2]"
            >
              Dashboard
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#EFE3C2]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-[#EFE3C2] hover:text-white block px-3 py-2">Home</Link>
            <Link to="/#about" className="text-[#EFE3C2] hover:text-white block px-3 py-2">About</Link>
            <Link to="/#features" className="text-[#EFE3C2] hover:text-white block px-3 py-2">Features</Link>
            <Link to="/#pricing" className="text-[#EFE3C2] hover:text-white block px-3 py-2">Pricing</Link>
            <Link to="/#testimonials" className="text-[#EFE3C2] hover:text-white block px-3 py-2">Testimonials</Link>
            <Link to="/#contact" className="text-[#EFE3C2] hover:text-white block px-3 py-2">Contact</Link>
            <button 
              onClick={handleDashboardClick}
              className="running-border-button w-full mt-4 px-6 py-2 rounded-full bg-[#3E7B27] text-[#EFE3C2]"
            >
              Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 