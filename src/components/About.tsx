import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Success Rate', icon: Target },
    { number: '50+', label: 'Cloud Experts', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Lightbulb }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">SKYERA</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over a decade of experience in cloud technologies and AI integration, 
                SKYERA has established itself as a trusted partner for enterprises seeking 
                digital transformation. Our team of certified experts delivers solutions 
                that drive real business value.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Leadership</h3>
                  <p className="text-gray-600">Recognized as a leading cloud and AI integration partner by major industry analysts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our certified professionals bring deep expertise in cloud platforms and AI technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">Consistent delivery of projects on time and within budget with measurable ROI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gray-50 p-4 rounded-xl mb-4 group-hover:bg-blue-50 transition-colors duration-200">
                    <Icon className="h-8 w-8 text-gray-600 group-hover:text-blue-600 mx-auto transition-colors duration-200" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;