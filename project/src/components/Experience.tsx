import React, { useState } from 'react';
import { Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  longDescription?: string[];
  type: 'professional' | 'leadership';
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    company: "Sampurv Technologies, Nagpur",
    period: "Summer 2023",
    description: [
      "Worked on real-world web development projects",
      "Gained hands-on experience with modern web technologies",
      "Collaborated with senior developers and team members"
    ],
    longDescription: [
      "Developed and maintained client websites using React and Node.js",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in daily stand-ups and sprint planning meetings",
      "Optimized website performance and implemented SEO best practices",
      "Worked with REST APIs and handled data integration",
      "Learned version control with Git and collaborative development workflows"
    ],
    type: "professional"
  },
  {
    title: "Technical Head",
    company: "IGNITE Forum",
    period: "2023 - Present",
    description: [
      "Leading technical initiatives and events",
      "Managing a team of student volunteers",
      "Organizing workshops and technical sessions"
    ],
    longDescription: [
      "Spearheaded the organization of technical workshops and coding competitions",
      "Mentored junior students in various technical domains",
      "Coordinated with industry professionals for guest lectures",
      "Managed a team of 15+ volunteers for event execution",
      "Increased student participation in technical activities by 40%",
      "Introduced new initiatives for practical skill development"
    ],
    type: "leadership"
  },
  {
    title: "Joint Secretary",
    company: "CSI Club",
    period: "2023 - Present",
    description: [
      "Coordinating club activities and events",
      "Facilitating communication between members",
      "Contributing to club growth and development"
    ],
    longDescription: [
      "Organized monthly technical workshops and seminars",
      "Managed club communications and social media presence",
      "Coordinated with other technical clubs for joint events",
      "Maintained documentation and reports of club activities",
      "Helped increase club membership by 30%",
      "Implemented feedback system for continuous improvement"
    ],
    type: "leadership"
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Leadership
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Briefcase size={24} />
              Professional Experience
            </h3>
            
            {experiences
              .filter(exp => exp.type === 'professional')
              .map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Award size={24} />
              Leadership Roles
            </h3>
            
            {experiences
              .filter(exp => exp.type === 'leadership')
              .map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.title || ''}
      >
        {selectedExperience && (
          <div className="space-y-6">
            <div>
              <p className="text-lg text-gray-600">{selectedExperience.company}</p>
              <p className="text-sm text-gray-500">{selectedExperience.period}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Responsibilities & Achievements</h4>
              <ul className="space-y-2 text-gray-600">
                {selectedExperience.longDescription?.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Experience;