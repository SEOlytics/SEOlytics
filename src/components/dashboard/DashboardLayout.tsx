import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Search,
  FileText,
  BarChart2,
  Settings,
  Home,
  ChevronLeft,
  Menu,
  Clock
} from 'lucide-react';
import Logo from '/Images/Logo.png';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your launch date here
  const launchDate = new Date('2024-05-01T00:00:00'); // Example: May 1st, 2024

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard' },
    { icon: <Search size={20} />, label: 'SEO Tools', path: '/dashboard/seo-tools' },
    { icon: <FileText size={20} />, label: 'Content', path: '/dashboard/content' },
    { icon: <BarChart2 size={20} />, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-[#0A1F16]">
      {/* Sidebar with background image and glassmorphism */}
      <div 
        className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out relative`}
        style={{
          backgroundImage: 'url(/Images/bg1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Glassmorphism overlay - reduced opacity */}
        <div className="absolute inset-0 bg-[#123524]/40 backdrop-blur-[2px]" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between p-4 border-b border-[#EFE3C2]/20">
            {!collapsed && (
              <img src={Logo} alt="SEO.ai Logo" className="h-12" />
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg bg-[#3E7B27]/20 hover:bg-[#3E7B27]/30"
            >
              {collapsed ? <Menu size={20} className="text-[#EFE3C2]" /> : <ChevronLeft size={20} className="text-[#EFE3C2]" />}
            </button>
          </div>
          <nav className="mt-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-4 py-3 text-[#EFE3C2] hover:bg-[#3E7B27]/20"
              >
                <span className="mr-3">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with background image and glassmorphism */}
        <header 
          className="relative"
          style={{
            backgroundImage: 'url(/Images/bg1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Glassmorphism overlay - reduced opacity */}
          <div className="absolute inset-0 bg-[#123524]/40 backdrop-blur-[2px]" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-semibold text-[#EFE3C2]">Dashboard</h1>
              <div className="flex items-center space-x-2">
                <Clock className="text-[#EFE3C2] animate-pulse" size={20} />
                <span className="text-[#EFE3C2] font-medium">To be launched in:</span>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-[#3E7B27]">{timeLeft.days}</span>
                    <span className="text-xs text-[#EFE3C2]/80">Days</span>
                  </div>
                  <span className="text-[#EFE3C2]">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-[#3E7B27]">{timeLeft.hours}</span>
                    <span className="text-xs text-[#EFE3C2]/80">Hours</span>
                  </div>
                  <span className="text-[#EFE3C2]">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-[#3E7B27]">{timeLeft.minutes}</span>
                    <span className="text-xs text-[#EFE3C2]/80">Minutes</span>
                  </div>
                  <span className="text-[#EFE3C2]">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-[#3E7B27]">{timeLeft.seconds}</span>
                    <span className="text-xs text-[#EFE3C2]/80">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-[#3E7B27]/60 hover:bg-[#3E7B27]/80 text-[#EFE3C2] rounded-lg transition-colors"
            >
              <Home size={20} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0A1F16] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 