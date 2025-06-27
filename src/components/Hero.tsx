import React from 'react';
import { ArrowRight, CheckCircle, Play, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-teal-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                <div className="flex -space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">Rated 4.9/5 by 500+ clients</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9]">
                <span className="block">Enterprise</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent">
                  Cloud Excellence
                </span>
                <span className="block text-5xl lg:text-6xl text-gray-700">
                  Powered by AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Transform your business with SKYERA's cutting-edge cloud management and AI integration solutions. 
                We deliver enterprise-grade infrastructure that scales with your ambitions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-2xl hover:border-blue-300 hover:text-blue-700 hover:bg-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Watch!!!
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  99.99%
                </div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  60%
                </div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Advanced Cloud Infrastructure"
                  className="rounded-2xl shadow-xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Live Monitoring</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-2">24/7</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Performance</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-green-600">+127%</div>
                    <div className="text-xs text-gray-500">improvement</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-3xl -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;