import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                Trusted by 500+ Enterprise Clients
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
                  Cloud Journey
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                SKYERA empowers enterprises with cutting-edge public cloud management and AI-driven project integration solutions. 
                Accelerate your digital transformation with our proven expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold text-lg"
              >
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600 mt-1">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50%</div>
                <div className="text-sm text-gray-600 mt-1">Cost Reduction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Cloud Technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;