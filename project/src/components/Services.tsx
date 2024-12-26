import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Smartphone, ShoppingCart, Palette, Rocket } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: <Globe size={24} />,
    title: 'Website Development',
    description: 'Custom websites built with modern technologies and best practices.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <Code size={24} />,
    title: 'Web Applications',
    description: 'Full-stack web applications with robust backend systems.',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Responsive Design',
    description: 'Mobile-first websites that work perfectly on all devices.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'E-commerce Solutions',
    description: 'Online stores with secure payment integration and inventory management.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: <Palette size={24} />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces with great user experience.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Performance Optimization',
    description: 'Speed up your existing website and improve SEO rankings.',
    gradient: 'from-yellow-500 to-amber-600'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Freelance Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need a website? I offer professional web development services to help bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className={`p-6 relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;