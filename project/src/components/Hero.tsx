import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Prathmesh Thakare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A Computer Science & Business Systems student at St. Vincent Pallotti College Of Engineering & Technology, 
              passionate about technology and leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFntcYHKbqbgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726093992405?e=1740614400&v=beta&t=Q_mYvsIJZoaxlVmcEn5EhT0AQ7rtDe88Lzzi4aj5luk"
              alt="Profile"
              className="rounded-full w-[400px] h-[400px] object-cover mx-auto shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;