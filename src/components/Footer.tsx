import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaPinterestP, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import Logo from '/Images/Logo.png';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF size={18} className="text-[#fff]" />, url: 'https://www.facebook.com/SEOLKSolutions/' },
    { name: 'Twitter', icon: <FaTwitter size={18} className="text-[#fff]" />, url: 'https://x.com/lk_seo' },
    { name: 'YouTube', icon: <FaYoutube size={18} className="text-[#fff]" />, url: 'https://www.youtube.com/@lk_seo' },
    { name: 'LinkedIn', icon: <FaLinkedinIn size={18} className="text-[#fff]" />, url: 'https://www.linkedin.com/company/seolk' },
    { 
      name: 'Crunchbase', 
      icon: <img src="/Images/cb.png" alt="Crunchbase" className="w-6 h-6" />, 
      url: 'https://www.crunchbase.com/organization/seo-lk' 
    },
    { 
      name: 'F6S', 
      icon: <img src="/Images/f6s.png" alt="F6S" className="w-6 h-6" />, 
      url: 'https://www.f6s.com/seo-lk' 
    },
  ];

  return (
    <footer className="w-full relative section-background">
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-[#123524]/50 backdrop-blur-[8px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {/* Left Side - Logo and Elevator Pitch */}
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img src={Logo} alt="SEO.ai Logo" className="h-12 w-auto" />
                
              </div>
              <p className="text-[#EFE3C2] max-w-md">
                Revolutionize SEO with Intelligent Solutions. Using advanced artificial intelligence technology,
                we help businesses optimize their content and improve their search ranking.
              </p>
            </div>

            {/* Middle Column - Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#EFE3C2] mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center text-[#EFE3C2]">
                  <MapPin className="h-5 w-5 text-[#d7cfaf] mr-3" />
                  <p>123 SEO Street<br />Digital Valley, Tech City 12345</p>
                </div>
                <div className="flex items-center text-[#EFE3C2]">
                  <Mail className="h-5 w-5 text-[#d7cfaf] mr-3" />
                  <a href="mailto:contact@seo.ai">contact@seo.ai</a>
                </div>
                <div className="flex items-center text-[#EFE3C2]">
                  <Phone className="h-5 w-5 text-[#d7cfaf] mr-3" />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
            </div>

            {/* Right Side - Newsletter */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#EFE3C2]">Newsletter</h3>
              <p className="text-[#EFE3C2] text-sm">Subscribe for updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-lg bg-[#123524]/50"
                />
                <button className="px-4 py-2 bg-[#3E7B27] rounded-r-lg">
                  <Send className="h-5 w-5 text-[#EFE3C2]" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center gap-6 mt-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 transition-transform duration-300 hover:-translate-y-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer - Centered Terms & Conditions with Copyright on the Right */}
        <div className="border-t border-[#d7cfaf]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Terms & Conditions on the Left */}
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-[#EFE3C2] hover:text-[#d7cfaf]">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="text-[#EFE3C2] hover:text-[#d7cfaf]">
                  Terms & Conditions
                </Link>
              </div>

              {/* Copyright on the Right */}
              <div className="text-[#EFE3C2] text-sm">
                <p>© 2024 SEO.ai. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
