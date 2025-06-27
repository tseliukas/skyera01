import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Cpu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const services = [
    { name: 'Cloud Migration', id: 'services' },
    { name: 'AI Integration', id: 'services' },
    { name: 'DevOps Solutions', id: 'services' },
    { name: 'Security & Compliance', id: 'services' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="flex items-center space-x-1">
                <div className="relative">
                  <Cloud className="h-10 w-10 text-blue-600" />
                  <Cpu className="h-5 w-5 text-teal-500 absolute -bottom-1 -right-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
                SKYERA
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wider">
                CLOUD & AI SOLUTIONS
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              Home
            </button>
            
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.id)}
                      className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              About
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100">
            <nav className="flex flex-col py-6 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <div className="px-6 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-center shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;