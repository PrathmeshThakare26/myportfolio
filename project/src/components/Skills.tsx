import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Globe, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Java Programming', icon: <Cpu size={24} />, level: 90, color: 'from-orange-400 to-red-500' },
  { name: 'Full Stack Development', icon: <Globe size={24} />, level: 85, color: 'from-blue-400 to-indigo-500' },
  { name: 'SQL', icon: <Database size={24} />, level: 88, color: 'from-green-400 to-emerald-500' },
  { name: 'Python', icon: <Terminal size={24} />, level: 82, color: 'from-yellow-400 to-amber-500' },
  { name: 'Frontend Development', icon: <Layout size={24} />, level: 92, color: 'from-purple-400 to-pink-500' },
  { name: 'Backend Development', icon: <Code2 size={24} />, level: 85, color: 'from-cyan-400 to-blue-500' },
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 text-right text-gray-400">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;