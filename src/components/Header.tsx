import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Cpu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Cloud className="h-8 w-8 text-blue-600" />
              <Cpu className="h-6 w-6 text-teal-600" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              SKYERA
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <nav className="flex flex-col py-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;