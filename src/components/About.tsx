import React from 'react';
import { Award, Users, Target, Lightbulb, TrendingUp, Globe, Shield, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users, color: 'blue' },
    { number: '99.99%', label: 'Uptime SLA', icon: Target, color: 'teal' },
    { number: '50+', label: 'Cloud Experts', icon: Award, color: 'orange' },
    { number: '24/7', label: 'Global Support', icon: Lightbulb, color: 'blue' }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized as a leading cloud transformation partner by Gartner and Forrester.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Serving enterprises across 40+ countries with localized expertise and support.',
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'SOC 2 Type II certified with zero security incidents in our operational history.',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Innovation Leadership',
      description: 'Pioneering next-generation cloud and AI solutions that define industry standards.',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-700' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', gradient: 'from-teal-600 to-teal-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-700' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Trusted Excellence Since 2014
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Leading Enterprises Choose 
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  SKYERA
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over a decade, SKYERA has been at the forefront of cloud innovation and AI integration. 
                We've helped Fortune 500 companies and growing enterprises transform their technology landscape, 
                delivering measurable results that drive sustainable growth.
              </p>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const colorClasses = getColorClasses(achievement.color);
                const Icon = achievement.icon;
                
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`${colorClasses.bg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="SKYERA team collaboration"
                  className="rounded-2xl shadow-xl"
                />
                
                {/* Floating Achievement Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">Growth Rate</span>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    +340%
                  </div>
                  <div className="text-xs text-gray-500">Year over year</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Experience</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-xs text-gray-500">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-3xl -z-10"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Delivering Results That Matter
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the measurable outcomes we deliver for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const colorClasses = getColorClasses(stat.color);
              const Icon = stat.icon;
              
              return (
                <div key={index} className="text-center group">
                  <div className={`${colorClasses.bg} p-6 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 inline-flex`}>
                    <Icon className={`h-8 w-8 ${colorClasses.text} mx-auto`} />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${colorClasses.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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