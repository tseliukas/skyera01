import React from 'react';
import { Cloud, Brain, Shield, Zap, Database, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and optimized performance.',
      features: ['AWS, Azure, GCP expertise', 'Automated scaling', 'Cost optimization'],
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'AI Project Integration',
      description: 'Integrate cutting-edge AI solutions into your existing workflows and business processes.',
      features: ['Machine Learning models', 'Process automation', 'Predictive analytics'],
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance frameworks for regulated industries.',
      features: ['SOC 2 compliance', 'Data encryption', 'Access controls'],
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maximize your cloud performance with advanced monitoring and optimization strategies.',
      features: ['Real-time monitoring', 'Auto-scaling', 'Performance analytics'],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions from migration to advanced analytics and insights.',
      features: ['Data warehousing', 'ETL pipelines', 'Business intelligence'],
      color: 'teal'
    },
    {
      icon: Settings,
      title: 'DevOps Integration',
      description: 'Streamline your development pipeline with modern DevOps practices and automation.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300'
      },
      teal: {
        icon: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        hover: 'hover:border-teal-300'
      },
      orange: {
        icon: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud and AI solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border-2 ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105`}
              >
                <div className={`inline-flex p-4 rounded-xl ${colorClasses.bg} mb-6`}>
                  <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.bg} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;