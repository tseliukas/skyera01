import React from 'react';
import { Cloud, Brain, Shield, Zap, Database, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Optimization',
      description: 'Seamlessly transition to cloud infrastructure with zero downtime and maximum performance optimization.',
      features: ['Multi-cloud expertise (AWS, Azure, GCP)', 'Automated scaling & load balancing', 'Cost optimization strategies', 'Migration planning & execution'],
      color: 'blue',
      popular: false
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Integration',
      description: 'Harness the power of artificial intelligence to transform your business processes and decision-making.',
      features: ['Custom ML model development', 'Process automation & optimization', 'Predictive analytics & insights', 'Natural language processing'],
      color: 'teal',
      popular: true
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Comprehensive security solutions ensuring your data and operations meet the highest industry standards.',
      features: ['SOC 2, HIPAA, GDPR compliance', 'Advanced threat detection', 'Zero-trust architecture', 'Security audits & monitoring'],
      color: 'orange',
      popular: false
    },
    {
      icon: Zap,
      title: 'Performance Engineering',
      description: 'Maximize system performance with advanced monitoring, optimization, and scalability solutions.',
      features: ['Real-time performance monitoring', 'Auto-scaling infrastructure', 'Performance bottleneck analysis', 'Capacity planning & optimization'],
      color: 'blue',
      popular: false
    },
    {
      icon: Database,
      title: 'Data Architecture & Analytics',
      description: 'Transform raw data into actionable insights with modern data warehousing and analytics solutions.',
      features: ['Data lake & warehouse design', 'ETL/ELT pipeline development', 'Business intelligence dashboards', 'Real-time data streaming'],
      color: 'teal',
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      description: 'Streamline development workflows with modern DevOps practices and intelligent automation.',
      features: ['CI/CD pipeline optimization', 'Infrastructure as Code (IaC)', 'Automated testing & deployment', 'Container orchestration'],
      color: 'orange',
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300',
        gradient: 'from-blue-50 to-blue-100'
      },
      teal: {
        icon: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        hover: 'hover:border-teal-300',
        gradient: 'from-teal-50 to-teal-100'
      },
      orange: {
        icon: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300',
        gradient: 'from-orange-50 to-orange-100'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            Comprehensive Solutions
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From cloud migration to AI integration, we deliver comprehensive solutions that drive digital transformation 
            and accelerate business growth across every aspect of your technology stack.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 border-2 ${colorClasses.border} ${colorClasses.hover} transition-all duration-500 hover:shadow-2xl hover:transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorClasses.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className={`h-4 w-4 ${colorClasses.icon} mr-3 mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`group/btn w-full flex items-center justify-center text-sm font-semibold ${colorClasses.icon} hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 border-2 ${colorClasses.border} hover:border-transparent px-6 py-3 rounded-xl transition-all duration-300`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts design a custom solution that perfectly fits your enterprise needs and accelerates your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;