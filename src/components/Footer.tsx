import React from 'react';
import { Cloud, Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Award } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    'Cloud Migration & Optimization',
    'AI & Machine Learning Integration',
    'Enterprise Security & Compliance',
    'Performance Engineering',
    'Data Architecture & Analytics',
    'DevOps & Automation'
  ];

  const company = [
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Leadership Team', action: () => {} },
    { name: 'Careers', action: () => {} },
    { name: 'Case Studies', action: () => {} },
    { name: 'Blog & Insights', action: () => {} },
    { name: 'Partner Program', action: () => {} }
  ];

  const resources = [
    'Documentation',
    'API Reference',
    'White Papers',
    'Webinars',
    'Cloud Assessment',
    'Support Center'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-teal-600/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="flex items-center space-x-1">
                    <Cloud className="h-10 w-10 text-blue-400" />
                    <Cpu className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    SKYERA
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-wider">
                    CLOUD & AI SOLUTIONS
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                Empowering enterprises with cutting-edge cloud management and AI integration solutions. 
                Your trusted partner for digital transformation and sustainable growth.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">SOC 2 Certified</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">99.99% Uptime</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                {company.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-4">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600/20 p-3 rounded-xl">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Email</div>
                <div className="text-sm text-gray-400">hello@skyera.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600/20 p-3 rounded-xl">
                <Phone className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Phone</div>
                <div className="text-sm text-gray-400">+1 (555) 555-4567</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600/20 p-3 rounded-xl">
                <MapPin className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Office</div>
                <div className="text-sm text-gray-400">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SKYERA. All rights reserved. | Transforming enterprises since 2014.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;